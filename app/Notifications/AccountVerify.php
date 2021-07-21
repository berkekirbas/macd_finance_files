<?php
namespace App\Notifications;
use Illuminate\Auth\Notifications\VerifyEmail as AccountVerifyBase;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;

class AccountVerify extends AccountVerifyBase {

    /**
  * Build the mail representation of the notification.
  *
  * @param  mixed  $notifiable
  * @return \Illuminate\Notifications\Messages\MailMessage

  */
    public function toMail($notifiable) {
        $verificationUrl = $this->verificationUrl($notifiable);
        return (new MailMessage)
        ->greeting('Hi')
        ->subject('Please verify your Mail Address')
        ->line('Please click the link below to verify your e-mail address.')
        ->action('Verify Your Mail', $verificationUrl);
    }
    /**
    * Get The verification URL for
    *
    * @param mixed $notifiable
    *
    */
    protected function verificationUrl($notifiable) {
        return URL::temporarySignedRoute('verification.verify',
            Carbon::now()->addMinutes(60), ['token' => $notifiable->token]
        );
    }
}