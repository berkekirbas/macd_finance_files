<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Post;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'v1/public'
], function()
{
    Route::get('getAllPost', 'App\Http\Controllers\Util\getAllPosts@posts');
});

Route::group([
    'prefix' => 'v1/auth',
], function () {

    Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');
    
    Route::post('register', 'App\Http\Controllers\Auth\RegisterController@register');
    
    Route::get('email/verify/{token}', 'App\Http\Controllers\Auth\MailVerifyController@verify')->name('verification.verify');
    Route::get('email/resend/{email}', 'App\Http\Controllers\Auth\MailResendController@resend');

    Route::group(['middleware' => 'auth:api'], function () {
		Route::post('logout', 'App\Http\Controllers\Auth\LogoutController@logout'); // logout controller
		
        Route::get('me', 'App\Http\Controllers\Auth\meController@me'); // Me Controllers
        Route::get('fetchUserInfoForEditing', 'App\Http\Controllers\Util\fetchUserInfoForEditing@fetch');
        Route::get('fetchUserInfoForTradersApplication', 'App\Http\Controllers\Util\fetchUserInfoForTradersApplication@fetch');
        
        Route::post('sharePost', 'App\Http\Controllers\Util\sharePost@sharePost'); // Post Sharing
        Route::get('getUserPosts/{id}', 'App\Http\Controllers\Util\getUserPosts@getUserPosts'); // Get User Posts with User ID
        Route::get('getUserProfileInfo/{slug}', 'App\Http\Controllers\Util\getUserProfileInfo@getUserProfileInfo');
        
        Route::post('follow', 'App\Http\Controllers\Util\Follow@Follow')->name('follow');
        Route::post('unfollow', 'App\Http\Controllers\Util\Follow@Unfollow')->name('follow');
        
        Route::post('post/like', 'App\Http\Controllers\Util\LikeDislike@Like');

        //Route::post('post/comment', 'App\Http\Controllers\Util\Comments@AddComment');
        Route::get('getAllUsers', 'App\Http\Controllers\Util\getAllUsers@getAll');

        Route::post('traders_application', 'App\Http\Controllers\Util\TradersApplicationController@Application');
    });
});
/*
Route::group([
    'prefix' => 'v1/password',
], function () {
    Route::post('sendtoken', 'App\Http\Controllers\Auth\ResetPasswordController@store');
    Route::get('find/{token?}', 'App\Http\Controllers\Auth\ResetPasswordController@find');
    Route::post('resetpassword','App\Http\Controllers\Auth\ResetPasswordController@resetpassword');
});*/