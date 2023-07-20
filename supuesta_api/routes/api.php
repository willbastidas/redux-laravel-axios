<?php

//Convocar lo que se va utilizar
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Dentro del metodo post se coloca Primero la url de donde van a llegar los datos
// luego el controlador que se va a utilizar de donde se utilizara la funcion
// y por ultimo el nombre de la funcion que se va a utilizar
Route::post('/productos', [ProductController::class, 'store']);