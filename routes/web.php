<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::group(['prefix' => 'api'], function(){
	Route::group(['prefix' => 'v1'], function(){
//,'middleware' => ['jwt.auth']
		Route::group(['prefix' => 'personal'], function(){
			Route::get('', ['uses' => 'personalController@getPersonal']);
			Route::get('{id}', ['uses' => 'personalController@getIdPersonal']);
			Route::post('', ['uses' => 'personalController@savePersonal']);
			//Route::put('{id}', ['uses' => 'regionController@updateAlumno']);
		});

		Route::group(['prefix' => 'skill'], function(){
			Route::get('', ['uses' => 'skillController@getSkill']);
			Route::get('{id}', ['uses' => 'skillController@getskillId']);
			//Route::post('', ['uses' => 'personalController@savePersonal']);
			//Route::put('{id}', ['uses' => 'regionController@updateAlumno']);
		});

			Route::group(['prefix' => 'nskill'], function(){
			Route::get('', ['uses' => 'nskillController@getnSkill']);
			//Route::get('{id}', ['uses' => 'regionController@getAlumno']);
			//Route::post('', ['uses' => 'personalController@savePersonal']);
			//Route::put('{id}', ['uses' => 'regionController@updateAlumno']);
		});
});
});



