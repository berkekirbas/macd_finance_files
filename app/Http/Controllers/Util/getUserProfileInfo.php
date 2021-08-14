<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use App\Models\User;

class getUserProfileInfo extends Controller
{
    public function getUserProfileInfo($nickname) {
        $user = User::where('nickname', $nickname)->first();
        return response()->json(['message' => $user, 'isFollowing' => auth()->user()->isFollowing($user->id),'followersCount' => $user->followers->count()]);
    }
}
