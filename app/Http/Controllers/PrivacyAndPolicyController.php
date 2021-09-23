<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PrivacyAndPolicy;
use App\Http\Controllers\Controller;
use Validator;

class PrivacyAndPolicyController extends Controller
{
    
    public function edit_privacy_and_policy($id){
        
        $privacyAndPolicy = PrivacyAndPolicy::find($id);
        
        return response()->json([
         'status' =>200,
         'privacyAndPolicy' => $privacyAndPolicy
        ]);
        
       
    }
      public function create_privacy_and_policy(Request $request){
        $validator = Validator::make($request->all(), [
            'privacy_and_policy' => 'required',
            
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() , 
            'errors' => $validator->errors()];
            return $response;
        }else{
            $privacyAndPolicy = new PrivacyAndPolicy();
            $privacyAndPolicy->privacies__and_policies = $request->privacy_and_policy; 
           
            
            $privacyAndPolicy->save();
            $response = ['status' => 200 , 'msg' => 'Added successfully.' , 
                         'privacyAndPolicy' => $privacyAndPolicy];
            return $response;   
        }
       
    }
    public function get_privacy_and_policy(){
        $privacyAndPolicy = PrivacyAndPolicy::where('delete_status',0)->get();
        $response = ['msg'=> 'privacyAndPolicy Sent', 'status'=> '200' , 'privacyAndPolicy'=>  $privacyAndPolicy];
        return $response;
    }

    
   
    public function update_privacy_and_policy(Request $request){

        $privacyandpolicy = PrivacyAndPolicy::find($request->id);
        $privacyandpolicy->privacies__and_policies = $request->privacy_and_policy;    
        $privacyandpolicy->save();
        $response = [ 
            'msg'=>' Updated',
            'status'=>'200'
        ];
        return $response;
    }
    public function delete_privacy_and_policy(Request $request){
        $privacyandpolicy = PrivacyAndPolicy::where('id', $request->id)->update([
           'delete_status' => true,
          
       ]);
       $response = [
           'status' => 200,
           'msg' => 'Successfully Deleted'
       ];
       return $response;
   }
    
    
        
}
