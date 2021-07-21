<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Http\Request;

class MailResendController extends Controller
{
    /**
    * Yeniden Mail Gönderme İşlemi
    *
    *
    * @return \Illuminate\Http\JsonResponse
    */
    protected function resend(Request $request) {
    $rules = [
        'email' => 'required|string|email|unique:users'
    ];
    
    $validator = Validator::make($request->all(), $rules);
    if ($validator->fails()) {
        return response()->json(['message' => $validator->errors(), 'code' => 400]);
    }
    
    $user = User::where('email', $request['email'])->first();
    
    if ($user->hasVerifiedEmail()) {
        $message['info'] = 'Your e-mail address has already been verified.';
        return response()->json(['message' => $message, 'code' => 422]);
    }
    
    $user->sendApiConfirmAccount();
    
    $message['info'] = 'E-Mail has been resent';
    
    return response()->json(['message' => $message, 'code' => 200]);
    }
}
