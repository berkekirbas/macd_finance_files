<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use App\Models\User;

class getAllUsers extends Controller
{
    public function getAll(){
        $users = User::all();
        return response()->json($users);
    }
}
