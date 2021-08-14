<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TradersApplication extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traders_applications', function (Blueprint $table) {
            $table->id("id")->unique();
            
            $table->string("email");
            $table->string("telegram_link");
            $table->string("instagram_link");
            $table->string("twitter_link");
            $table->string("introduce_yourself");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traders_applications');

    }
}
