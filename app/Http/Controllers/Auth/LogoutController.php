<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Cookie;

class LogoutController extends Controller
{
    /**
    * ! Logout session
    *
    * @return \Illuminate\Http\JsonResponse
    */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        $cookie = Cookie::forget('Macd_Finance_Auth_Token');
        return response()->json([
            'message' => 'Logout Successfully'
        ])->withCookie($cookie);
    }
}
