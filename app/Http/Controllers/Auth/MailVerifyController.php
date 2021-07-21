<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class MailVerifyController extends Controller
{
    use MustVerifyEmail;

    /**
    * Kullanıcı Email Onaylama
    *
    *
     * @return \Illuminate\Http\JsonResponse
    */
    protected function verify(Request $request) {
        $user = User::where('token', $request['token'])->firstOrFail();

        if ($user->hasVerifiedEmail()) {
            $message['error'] = 'Your e-mail address has already been verified.';
            return response()->json(['message' => $message, 'code' => 422]);
        }

        $user->email_verified_at = now();

        $user->active = true;

        $user->token = null;

        $user->save();

        /*
            $setDelay = Carbon::parse($user->email_verified_at)->addSeconds(10);
            
            Bu kısımda isterseniz Kullanıcıya Hoşgeldinizi Maili İçin Gecikme Verebilirsiniz.
            
            Mail::queue(new \App\Mail\UserWelcome($user->name, $user->email))->delay($setDelay);
        */

        Mail::queue(new \App\Mail\UserWelcome($user->name, $user->email));
        
		return view('emails/success');
    }
}
