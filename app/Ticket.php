<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = "tickets";
    public $fillable = ['title', 'description', 'email', 'name', 'status', 'user_id' , 'replied_by', 'reply' ];

    // public function thread(){
    //     return $this->belongsTo('App\TicketThread', 'id');
    // }
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
    public function replier(){
        return $this->belongsTo('App\User', 'replied_by');
    }


}
