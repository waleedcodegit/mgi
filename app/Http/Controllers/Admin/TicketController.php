<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Ticket;
use App\UserAuthMeta;
use Illuminate\Http\Request;
use Validator;
class TicketController extends Controller
{
    public function get_open_tickets(){
        $tickets = Ticket::where('status', 'open')->where('delete_status',0)->with('user')->get();
        $response = [ 'msg'=> 'Tickets Sent', 'status'=> '200', 'tickets' => $tickets];
        return $response;
    }
    public function get_closed_tickets(){
        $tickets = Ticket::where('status', 'closed')->with('user', 'replier')->get();
        $response = [ 'msg'=> 'Tickets Sent', 'status'=> '200', 'tickets' => $tickets];
        return $response;
    }
    public function get_ticket_by_id(Request $request){
        $ticket = Ticket::find($request->id);
        $response = [ 'msg'=> 'Ticket Sent', 'status'=> '200', 'ticket' => $ticket];
        return $response;
    }
    public function update_ticket(Request $request){
        $validator = Validator::make($request->all(), [
            'reply' => 'required'
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            if($request->id && $request->token){
                $ticket = Ticket::find($request->id);
                $user = UserAuthMeta::where('token', $request->token)->first();
                if($user){
                    $user_id = $user->user_id;
                }
                $ticket->replied_by = $user_id;
                $ticket->reply = $request->reply;
                $ticket->status = "closed";
                $ticket->save();
                $response = [ 'msg'=> 'Ticket Updated', 'status'=> '200'];
                return $response;
            }
            else if(!$request->id){
                $response = [ 'msg'=> 'Ticket Id is required', 'status'=> '219'];
                return $response;
            }
            else if(!$request->token){
                $response = [ 'msg'=> 'Auth Issue', 'status'=> '219'];
                return $response;
            }
           
        }
    }
    
    public function delete_deleteTickets(Request $request) {
        
        $ticket = Ticket::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }
}
