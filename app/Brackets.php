<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brackets extends Model
 {
        protected $table = 'brackets';
    
        public function tournament(){
            return $this->belongsTo('App\Tournament');
        }
        // public function tournament(){
        //     return $this->belongsTo('App\Tournament', 'tournament_id');
        // }
    
       
 }

