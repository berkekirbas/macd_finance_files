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

use Qirolab\Laravel\Reactions\Traits\Reacts;
use Qirolab\Laravel\Reactions\Contracts\ReactsInterface;

use BeyondCode\Comments\Contracts\Commentator;


class User extends Authenticatable implements ReactsInterface, Commentator
{
    use Reacts;
    use Followable,HasApiTokens,HasFactory,Notifiable,SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'nickname',
        'password',
        'email',
        'active',
        'gender',
        'token',
        'avatar',
        'isApplicated',
        'followersCount'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'email',
        'token',
        'updated_at',
        'deleted_at',
        'email_verified_at',
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

    /**
     * Check if a comment for a specific model needs to be approved.
     * @param mixed $model
     * @return bool
     */
    public function needsCommentApproval($model): bool
    {
        return false;    
    }

}
