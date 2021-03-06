<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', 'API\UserController@login');
Route::post('/register', 'API\UserController@store');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/users', 'API\UserController@index');
    Route::get('/user/{id}', 'API\UserController@show');
    Route::put('/user/{id}', 'API\UserController@update');
    Route::delete('/user/{id}', 'API\UserController@destroy');
});
