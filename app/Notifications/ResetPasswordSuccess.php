<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ResetPasswordSuccess extends Notification {
	use Queueable;

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */

	/**
    * Get the notification's delivery channels.
    *
    * @param  mixed  $notifiable
    * @return array
    */
    
    public function via($notifiable) {
        return ['mail'];
    }
	
	public function toMail($notifiable) {
		return (new MailMessage)
			->line('Your password successfully changed.');
	}
}
