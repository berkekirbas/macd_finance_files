<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class Follow extends Controller
{
    public function follwUserRequest(Request $request){
        $user = User::find($request->user_id);
        $response = auth()->user()->toggleFollow($user);
        return response()->json(['success'=>$response]);
    }
}
