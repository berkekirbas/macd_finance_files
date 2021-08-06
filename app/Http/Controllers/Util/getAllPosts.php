<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class getAllPosts extends Controller
{
    public function posts(){
        $posts = Post::with('user:id,name,nickname,avatar')->get();
        return response()->json($posts);
    }
}
