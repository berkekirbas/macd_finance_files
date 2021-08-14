<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

use App\Models\TradersApplication;
use App\Models\User;


class TradersApplicationController extends Controller
{
    public function application(Request $request){
        $isTrader = Auth::user()->isTrader;
        $isApplicated = Auth::user()->isApplicated;
        if ($isTrader){
            return response()->json(['message' => "You are not authorized to perform this operation.", 'code' => 401]);
        }

        if ($isApplicated){
            return response()->json(['message' => "You have already applied", 'code' => 401]);
        }
        
        $rules = [
            'id' => 'required',
            'email' => 'required|string|email|max:191',
            'twitter_link' => 'required|string|max:191',
            'instagram_link' => 'required|string|max:191',
            'twitter_link' => 'required|string|max:191',
            'introduce_yourself' => 'required|string|max:191',
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response()->json(['message' => $validator->errors(), 'code' => 400]);
        }

        $application = new TradersApplication([
            'id' => $request->id,
            'email' => $request->email,
            'telegram_link' => $request->telegram_link,
            'instagram_link' => $request->instagram_link,
            'twitter_link' => $request->twitter_link,
            'introduce_yourself' => $request->introduce_yourself
        ]);

        $user = User::find(Auth::user()->id);

        $user->isApplicated = true;

        $user->save();
        $application->save();

        return response()->json(['message' => 'Application was created successfully']);
    }
}
