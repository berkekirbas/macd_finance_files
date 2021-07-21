<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    protected $successStatus = 200;

    /**
    * Kullanıcı Girişi ve token oluşturma
    *
    * @param [string] email
    * @param [string] password
    * @return [string] token
    * @return [string] token_type
    * @return [string] expires_at
    * @return [string] success
    */
    
    public function login(Request $request){
        $rules = [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors(), 'code' => 400]);
        }

        $credentials = request(['email', 'password']);
        
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $message['token'] = $user->createToken('Macd_Finance_Traders_Platform_Token')->accessToken;
            $message['token_type'] = 'Bearer';
            $message['expires_at'] = Carbon::parse(Carbon::now()->addHour(2))->toDateTimeString();
            $message['success'] = 'User Login Process is Successfully';
    
            return response()->json(['message' => $message], $this->successStatus);
        } else {
            return response()->json(['error'=>'Unauthorised'], 401);
        }        
    }
}
