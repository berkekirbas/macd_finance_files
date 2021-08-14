<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Post;
use App\Models\User;

class LikeDislike extends Controller
{
    public function Like(Request $request){
        $user = User::find(Auth::user()->id);
        $post = Post::find($request->post_id);

        if($post->isReactBy($user)){
            $post->removeReaction($user);
            $post->like--;
            $post->save();
            return response()->json(['message' => 'Like take it back']);
        }

        $post->react('like', $user);
        $post->like++;
        $post->save();
        return response()->json(['message' => 'Liked']);
    }

}
