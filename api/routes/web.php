<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

//$app->group(['middleware' => 'cors'], function () use ($app) {
$app->get('api/nippoes', 'NippoController@index');
$app->post('api/nippoes', 'NippoController@create');
$app->put('api/nippoes/{id}', 'NippoController@update');
$app->delete('api/nippoes/{id}', 'NippoController@delete');
//});
