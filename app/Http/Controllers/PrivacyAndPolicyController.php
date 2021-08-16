<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PrivacyAndPolicy;
use App\Http\Controllers\Controller;
use Validator;

class PrivacyAndPolicyController extends Controller
{
    public function get_privacy_policy() {
        $data = PrivacyAndPolicy::first();
        $response = [
            'status' => 200 , 
            'msg' => 'Privacy And Policy Saved',
            'privacyandpolicy' => $data
        ];
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
    
    
        
}
