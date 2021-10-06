<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Email;
class EmailController extends Controller
{
    public function create_email(Request $request){  
            
        $email = new Email();
        $email->user_id = $request->user_id;
        $email->email = $request->email;
        $email->save();
        $response = ['msg'=> 'Email Saved', 'status'=> '200'];
        return $response;
    }
    public function get_emails(){
        $email = Email::with('user')->get();
        $response = ['msg'=> 'email Sent', 'status'=> '200' , 'email'=>  $email];
        return $response;
    }
}