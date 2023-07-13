<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FortgetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mail_token)
    {
         $this->data = $mail_token;
    }


    public function build()
    {
        $mailData = $this->data;
        return $this->from('m.karimcu@gmail.com')->view('mail.forgetMail',compact('mailData'))->subject('Password reset Link');
    }
}
