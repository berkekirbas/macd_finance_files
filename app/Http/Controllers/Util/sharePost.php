<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class sharePost extends Controller
{
    public function sharePost(Request $request){
        $isTrader = Auth::user()->isTrader;
        if (!$isTrader){
            return response()->json(['message' => "You are not authorized to perform this operation."]);
        }
        
        
    }
}

