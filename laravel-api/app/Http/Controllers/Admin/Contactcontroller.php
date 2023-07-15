<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class Contactcontroller extends Controller
{
    public function getContact(Request $request)
    {
        date_default_timezone_set('Asia/Dhaka');

         $res = Contact::insert([
            'name'=>$request->name,
            'email'=>$request->email,
            'message'=>$request->message,
            'contact_time'=>date('h:i:sa'),
            'contact_date'=>date('d-m-Y')
        ]);

        return response()->json($res);
    }
}
