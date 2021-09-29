<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enrollment;
use App\TournamentMessage;

class TournamentController extends Controller
{
    public function get_user_enroll_tournament(Request $request) {
        $data = Enrollment::where('user_id', $request->id)->with('tournament')->get();
        $response = [
                'status' => 200,
                'msg' => 'User Enroll Tournaments', 
                'data' => $data
            ];
            return $response;
    }
    public function get_tournament_chat_messages(Request $request) {
        $messages = TournamentMessage::where('tournament_id', $request->id)->get();
        $response = [
            'status' => 200,
            'msg' => 'Tournament Messages', 
            'messages' => $messages
        ];
        return $response;
    }

    public function send_tournament_chat_messages(Request $request) {
        $message = new TournamentMessage();
        $message->sender = $request->sender_id;
        $message->tournament_id = $request->tournament_id;
        $message->message = $request->message;
        $message->time = date("h:i:sa");
        $message->date = date("d-m-Y");
        $message->save();

        $messages = TournamentMessage::where('tournament_id', $request->tournament_id)->get();

        $response = [
            'status' => 200,
            'msg' => 'Messages save',
            'messages' => $messages
        ];
        return $response;
    }
}
