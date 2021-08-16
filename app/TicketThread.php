<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TicketThread extends Model
{
    protected $table = "tickets";
    public $fillable = ['ticket_id', 'message', 'user_id'];
    
    public function user(){
        return $this->belongsTo('App\User');
    }
}
