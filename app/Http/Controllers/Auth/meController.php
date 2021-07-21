<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class meController extends Controller
{
    public function me() {

		$message['user'] = Auth::user();
		$message['success'] = 'Success';
		return response()->json(['message' => $message, 'code' => 200]);
	}
}
