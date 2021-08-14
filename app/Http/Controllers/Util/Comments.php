<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Post;
use App\Models\User;

class Comments extends Controller
{
    public function AddComment(Request $request){
        $post = Post::find($request->post_id);
        $user = User::find(auth()->user()->id);

        $post->commentAsUser($user, 'This is a comment from someone else.');

        return response()->json(['message' => 'Comment successfully added']);
    }
}
