<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    protected $table = "support_tickets";

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
