<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return view("app.blade");
        }
    }
	
	public function handle($request, Closure $next, ...$guards)
	{
		if ($request->cookie('Macd_Finance_Auth_Token')) {
			$request->headers->set('Authorization', 'Bearer ' . $request->cookie('Macd_Finance_Auth_Token'));

		}

		$this->authenticate($request, $guards);

		return $next($request);
	}
}
