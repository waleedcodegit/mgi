<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserChat;
use App\UserMessage;

class UserChatController extends Controller
{
    public function create_chat_message(Request $request){
        $user_chat = UserChat::where('sender_id', $request->sender_id)->where('reciver_id',$request->reciver_id)->first();
        if($user_chat){
            

            $response = [
                'status' => 200,
                'message' => 'Chat Found'
            ];
            return $response;
        } else if(UserChat::where('sender_id', $request->reciver_id)->where('reciver_id',$request->sender_id)->first()){
        
            $response = [
                'status' => 200,
                'message' => 'Chat Found'
            ];
            return $response;
        }

            $customer_chat = new UserChat();
            $customer_chat->sender_id = $request->sender_id;
            $customer_chat->reciver_id = $request->reciver_id;
            $customer_chat->last_active = date("Y-m-d h:i:sa");
            $customer_chat->save();
            
            $response = [
                'status' => 200,
                'message' => 'Chat Created'
            ];
            return $response;
        
    }

    public function get_all_user_chats(Request $request) {
        // return $request->user_id;
        $user_chats = UserChat::where('sender_id', $request->user_id)->orWhere('reciver_id',$request->user_id)
        ->with('reciver_user', 'sender_user')->orderby('last_active','desc')->get();
        return $user_chats;
    }

    public function get_user_chat_messages(Request $request){
        $user_chat = UserChat::where('id',$request->chat_id)->first();
        if($user_chat){
            $user_messages = UserMessage::where('chat_id',$user_chat->id)->get();
            $response = [
                'status' => 200,
                'messages' => $user_messages
            ];
            return $response;
        }else{
            $response = [
                'status' => 404,
                'message' => 'Message Are not existed'
            ];
            return $response;
        }
    }

    public function user_message_sender(Request $request){

        $vendor_chat = UserChat::where('id',$request->chat_id)->first();

        $vendor_message = new UserMessage();
        $vendor_message->sender = $request->sender;
        $vendor_message->chat_id = $vendor_chat->id;
        $vendor_message->message = $request->message;
        $vendor_message->time = date("h:i:sa");
        $vendor_message->date = date("d-m-Y");
        $vendor_message->save();

        $vendor_chat =  UserChat::where('id',$vendor_chat->id)->first();
        $vendor_chat->last_active = date("Y-m-d h:i:sa");
        $vendor_chat->last_msg_id = $vendor_message->id;
        $vendor_chat->save();
        
        $response = [
            'status' => 200,
            'message' => 'Message Sent'
        ];
        return $response;
    }

    
}
