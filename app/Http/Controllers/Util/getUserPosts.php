<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Post;

class getUserPosts extends Controller
{
    public function getUserPosts ($id){
        $user = User::find($id);
        $posts = Post::where("user_id", "=", $user->id)->get();
        return response()->json($posts);
    }
}
