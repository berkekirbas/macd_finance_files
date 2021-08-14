<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TradersApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'email',
        'telegram_link',
        'instagram_link',
        'twitter_link',
        'introduce_yourself',
    ];
}
