<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enrollment;
use App\TournamentRequiredFieldUserAnswer;
use App\Tournament;

class EnrollmentController extends Controller
{
    public function enrollment_check(Request $request) {
        $user = Enrollment::where('user_id', $request->user_id)->where('tournament_id', $request->tournament_id)->first();
        if($user) {
            $response = [ 
                'msg'=>'user enroll',
                'status'=>'200'
            ];
            return $response;
        } else {
            $response = [ 
                'msg'=>'user not enroll',
                'status'=>'201'
            ];
            return $response;
        }
    }
    public function create_enrollment(Request $request){
        $tournament_type = Tournament::where('id', $request->tournament_id)->first();
        $enrollment_limit = Enrollment::where('tournament_id' , $request->tournament_id)->count();
        
        if($tournament_type->mode == "1 vs 1") {
            if($enrollment_limit != $tournament_type->registration_limit) {
                if(count($request->ansFields)) {
                    $enroll = new Enrollment();
                    $enroll->user_id = $request->user_id;
                    $enroll->tournament_id = $request->tournament_id;
                    $enroll->save();
    
                    foreach($request->ansFields as $val) {
                        $data = new TournamentRequiredFieldUserAnswer();
                        $data->tournament_id = $request->tournament_id;
                        $data->field_name = $val['field']['name'];
                        $data->field_value = $val['answer'];
                        $data->user_id = $request->user_id;
                        $data->enrollment_id = $enroll->id;
                        $data->save();
                    }
    
                    $response = [ 
                        'msg'=>'Enrollment Data Save',
                        'status'=>'200'
                    ];
                    return $response;
                } else {
                    $response = [ 
                        'msg'=>'ENTER REQUIRED FIELDS',
                        'status'=>'false'
                    ];
                    return $response;
                }
            } else {
                $response = [ 
                    'msg'=>'Registration Limit Full',
                    'status'=>'200'
                ];
                return $response;
            }            
        } else if($tournament_type->mode == "team vs team") {
            $response = [ 
                'msg'=>'Team Enrollment Coming soon',
                'status'=>'200'
            ];
            return $response;
        }
            

    }
    public function get_enrollments(){
        $enrollments = Enrollment::where('delete_status',0)->with('tournament','user')->get();
        $response = ['msg'=> 'enrollment Sent', 'status'=> '200' , 'enrollments'=> $enrollments];
        return $response;
    }

    public function get_tournament_enroll_user(Request $request) {
        $enrollment_users = Enrollment::where('tournament_id', $request->tournament_id)->with('tournament','user')->get();
        $response = [
            'msg'=> 'enrollment User',
            'status'=> '200' , 
            'enrollment_users'=> $enrollment_users
        ];
        return $response;
    }

    public function delete_enrollments(Request $request){
        $enrollments = Enrollment::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }
}
