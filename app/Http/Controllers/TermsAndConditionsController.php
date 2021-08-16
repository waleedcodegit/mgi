<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TermAndCondition;
use App\Http\Controllers\Controller;
use Validator;

class TermsAndConditionsController extends Controller
{
    public function add_term_and_condition(Request $request){
        $validator = Validator::make($request->all(), [
            
            'term_and_condition' => 'required'
            
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            $termandcondition = new TermAndCondition();
            
            $termandcondition->terms_and_conditions = $request->term_and_condition;
            $termandcondition->save();
            $response = ['msg'=> 'Privacy And Policy Saved', 'status'=> '200'];
            return $response;
        }
    }
    public function term_and_condition_list(){
        $termandcondition = TermAndCondition::all();
        $response = ['msg'=> 'Games Sent', 'status'=> '200' , 'term_and_condition'=>  $termandcondition];
        return $response;
    }
    // public function Edit_term_and_condition(Request $request, $id)
    public function Edit_term_and_condition($id){
        
        $termandcondition = TermAndCondition::find($id);
        
        return response()->json([
         'status' =>200,
         'termandcondition' => $termandcondition
        ]);
        
       
    }
    public function Update_term_and_condition(Request $request){

        $termandcondition = TermAndCondition::find($request->id);
        $termandcondition->terms_and_conditions = $request->term_and_condition;
        
        $termandcondition->save();
        $response = [ 'msg'=>' Updated', 'status'=>'200'];
        return $response;
    }
}
