<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enrollment;
use App\TournamentRequiredFieldUserAnswer;

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

    }
    public function get_enrollments(){
        $enrollments = Enrollment::where('delete_status',0)->with('tournament','user')->get();
        $response = ['msg'=> 'enrollment Sent', 'status'=> '200' , 'enrollments'=> $enrollments];
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
