<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\SoftDeletes;
use App\Notifications\AccountVerify;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Overtrue\LaravelFollow\Followable;

class User extends Authenticatable
{
    use HasApiTokens,HasFactory,Followable , Notifiable, SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'nickname',
        'email',
        'password',
        'active',
        'gender',
        'token',
        'avatar',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        
        'updated_at',
        'deleted_at',
        'password',
        'remember_token',
    ];

    /**
    *
    * Working Method for User Email Verification
    *
    */
    public function sendApiConfirmAccount() {
        $this->notify(new AccountVerify);
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function posts(){
        return $this->hasMany('App\Models\Post');
    }
}
