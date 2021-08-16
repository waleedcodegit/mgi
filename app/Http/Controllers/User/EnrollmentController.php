<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enrollment;

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
                foreach($request->ansFields as $val) {
                    $data = new Enrollment();
                    $data->tournament_id = $val['field']['tournament_id'];
                    $data->field_name = $val['field']['name'];
                    $data->field_value = $val['answer'];
                    $data->user_id = $request->user_id;
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
}
