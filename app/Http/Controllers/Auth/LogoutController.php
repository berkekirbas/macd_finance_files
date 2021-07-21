<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    /**
    * ! Logout session
    *
    * @return \Illuminate\Http\JsonResponse
    */
    public function logout(Request $request) {

		$request->user()->token()->revoke();

		$message['success'] = 'Logout the system';

		return response()->json(['message' => $message, 'code' => 200]);
	}
}
