<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\AuthController;

Route::post('/dang-ky', [AuthController::class, 'dangKy']);
Route::post('/dang-nhap', [AuthController::class, 'dangNhap']);
