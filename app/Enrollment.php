<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $table = "enrollments";

    public function tournament(){
        return $this->belongsTo('App\Tournament', 'tournament_id');
    }
    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
