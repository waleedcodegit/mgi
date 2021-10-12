<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Support;
use App\SupportTicketDetail;
use Validator;
use App\AdminAuthMeta;

class SupportController extends Controller
{
    public function get_open_tickets(Request $request) {
        $tickets = Support::where('status', 'Open')->with('user')->get();
        $response = [
            'status' => 200,
            'msg' => 'All Open Tickets',
            'ticket' => $tickets
        ];
        return $response;
    }
    public function get_user_ticket(Request $request) {
        $tickets = Support::where('user_id', $request->id)->get();
        $response = [
            'status' => 200,
            'msg' => 'All User Tickets',
            'ticket' => $tickets
        ];
        return $response;
    }

    public function create_ticket(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'issues' => 'required',
            'description' => 'required',
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            $data = new Support();
            $data->user_id = $request->user_id;
            $data->subject = $request->subject;
            $data->save();

            $ticket_detail = new SupportTicketDetail();
            $ticket_detail->support_id = $data->id;
            $ticket_detail->user_id = $request->user_id;  
            $ticket_detail->name = $request->name; 
            $ticket_detail->email = $request->email;  
            $ticket_detail->issues = $request->issues;      
            $ticket_detail->description = $request->description;
            $ticket_detail->save();

            $response = [
                'status' => 200,
                'msg' => 'Ticket Created',
            ];
            return $response;
        }  
    }

    public function get_support_comment(Request $request) {
        $data = SupportTicketDetail::where('support_id', $request->id)->with('user')->get();
        $response = [
            'status' => 200,
            'msg' => 'All Ticket Comments',
            'data' => $data
        ];
        return $response;
    }

    public function create_comment_in_detail(Request $request) {
        $validator = Validator::make($request->all(), [
            'description' => 'required',
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
                $ticket_detail = new SupportTicketDetail();
                $ticket_detail->support_id = $request->support_id;
                $ticket_detail->user_id = $request->user_id;        
                $ticket_detail->description = $request->description;
                if ($request->image) {       
                    $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->resize(115, 115)->save(public_path('images/').  $name);
                    $ticket_detail->image = $name;
                }
                $ticket_detail->save();

                $response = [
                    'status' => 200,
                    'msg' => 'Created',
                ];
                return $response;
        }
    }

    public function create_comment_admin(Request $request) {
        $validator = Validator::make($request->all(), [
            'description' => 'required',
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
                $admin_auth = AdminAuthMeta::where('token',$request->token)->first();
                $ticket_detail = new SupportTicketDetail();
                $ticket_detail->support_id = $request->support_id;
                $ticket_detail->admin_id = $admin_auth->admin_id;        
                $ticket_detail->description = $request->description;
                // if ($request->image) {       
                //     $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                //     \Image::make($request->image)->resize(115, 115)->save(public_path('images/').  $name);
                //     $ticket_detail->image = $name;
                // }
                $ticket_detail->save();

                $response = [
                    'status' => 200,
                    'msg' => 'Created',
                ];
                return $response;
        }
    }
    public function get_closed_tickets(Request $request) {
        $tickets = Support::where('status', 'Close')->with('user')->get();
        $response = [
            'status' => 200,
            'msg' => 'All Close Tickets',
            'ticket' => $tickets
        ];
        return $response;
    }
    public function update_ticketstatus(Request $request) {
        
        $tickets = Support::where('id', $request->id)->update([
            'status' => 'Close'
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Ticket Close'
        ];
        return $response;
    }
    
    
}
