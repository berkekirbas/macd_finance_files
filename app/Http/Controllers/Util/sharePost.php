<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;


class sharePost extends Controller
{
    public function sharePost(Request $request){
        $isTrader = Auth::user()->isTrader;
        if (!$isTrader){
            return response()->json(['message' => "You are not authorized to perform this operation.", 'code' => 401]);
        }
        
        $rules = [
            'post_content' => 'required|string',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()){
            return response()->json(['message' => $validator->errors(), 'code' => 400]);
        }

        if ($request->hasFile('post_image'))
        {
            $file      = $request->file('post_image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            //move image to public/images/posts folder
            $file->move(public_path('images/posts'), $picture);

            $date = Carbon::parse(Carbon::now())->format('Y-m-d H:i');

            $post = new Post([
                'user_id' => Auth::user()->id,
                'post_content' => $request->post_content,
                'post_image' => $picture,
                'created_at' => $date,
            ]);
        } 
        else
        {
            return response()->json(["message" => "Select image first."]);
        }

        $post->save();

        

        return response()->json(['post_info' => $post ]);
    }
}

