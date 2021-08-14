<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Follow extends Controller
{
    public function Follow(Request $request){
        $user = User::find($request->user_id);
        $currentUser = User::find(Auth::user()->id);
        $currentUser->toggleFollow($user);
        $user->followersCount++;
        $user->save();
        return response()->json(['success'=>true]);
    }

    public function Unfollow(Request $request){
        $user = User::find($request->user_id);
        $currentUser = User::find(Auth::user()->id);
        $currentUser->unfollow($user);
        $user->followersCount--;
        $user->save();
        return response()->json(['success' => true]);
    }
}
