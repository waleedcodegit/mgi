<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SupportTicketDetail extends Model
{
    protected $table = "support_ticket_details";

    
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
