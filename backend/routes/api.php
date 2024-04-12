<?php

    use Illuminate\Support\Facades\Route;

    Route::get('/data', 'DataController@index');
    Route::post('/data', 'DataController@store'); 



