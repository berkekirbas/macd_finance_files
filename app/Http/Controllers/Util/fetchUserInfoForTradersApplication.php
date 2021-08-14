<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class fetchUserInfoForTradersApplication extends Controller
{
    public function fetch(){
        $user = Auth::user()->makeVisible(['email']);
        $message['user'] = $user;
		$message['userFollowersCount'] = auth()->user()->followers->count();
		$message['success'] = 'Success';
		return response()->json(['message' => $message, 'code' => 200]);
    } 
}
