<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordNotify extends Notification {
    use Queueable;
    
    protected $token;
    
    /**
    * Create a new notification instance.
    *
    * @return void
    */
    
    public function __construct($token) {
        $this->token = $token;
    }
    
    /**
    * Get the notification's delivery channels.
    *
    * @return array
    */
    
    public function via() {
        return ['mail'];
    }
    
    /**
    * Get the mail representation of the notification.
    *
    * @return \Illuminate\Notifications\Messages\MailMessage
    */

    public function toMail() {
        $url = url('/api/password/find/' . $this->token);
        return (new MailMessage)
        ->line('Click the Button to Renew Your Password')
        ->action('Renew Link', url($url));
    }
}