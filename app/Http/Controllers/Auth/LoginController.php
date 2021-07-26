<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Cookie;


class LoginController extends Controller
{

    protected $successStatus = 200;

    /**
    * Kullanıcı Girişi ve token oluşturma
    *
    * @param [string] email
    * @param [string] password
    * @return [string] token
    * @return [string] token_type
    * @return [string] expires_at
    * @return [string] success
    */
    
    public function login(Request $request){
        $rules = [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors(), 'code' => 400]);
        }

        $credentials = request(['email', 'password']);
        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token =  $user->createToken('Macd_Finance_Auth_Token')->accessToken;
            $cookie = $this->getCookieDetails($token);
            return response()
                ->json([
                    'user' => $user,
                    'token' => $token,
                ], 200)
                ->cookie($cookie['name'], $cookie['value'], $cookie['minutes'], $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly'], $cookie['samesite']);
        } else {
            return response()->json(
                ['error' => 'Invalid Credentials'], 422);
        }   
    }

    private function getCookieDetails($token)
    {
        return [
            'name' => 'Macd_Finance_Auth_Token',
            'value' => $token,
            'minutes' => 1440,
            'path' => null,
            'domain' => null,
            // 'secure' => true, // for production
            'secure' => null, // for localhost
            'httponly' => true,
            'samesite' => true
        ];
    }
}
