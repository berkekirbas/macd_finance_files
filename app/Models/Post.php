<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Qirolab\Laravel\Reactions\Traits\Reactable;
use Qirolab\Laravel\Reactions\Contracts\ReactableInterface;

use BeyondCode\Comments\Traits\HasComments;


class Post extends Model implements ReactableInterface
{
    use Reactable;
    use HasComments; 
    use HasFactory;

    protected $primaryKey = 'post_id';

    protected $fillable = [
        'user_id', 'post_image', 'post_content', 'created_at', 'like'
    ];

    public function user(){
        return $this->belongsTo('App\Models\User')->select('user_id');
    }

    
}

