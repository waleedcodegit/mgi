<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class user_social_link extends Model
{
    protected $table = "user_social_links";
    protected $fillable = [
        'user_id', 
        'google',  
        'facebook',
        'twitter', 
        'apple',  
        'battle', 
        'vk', 
        'discord' 
    ];
}
