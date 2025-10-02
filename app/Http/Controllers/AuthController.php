<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Đăng ký
    public function dangKy(Request $request)
    {
        $request->validate([
            'ho_va_ten' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'ho_va_ten' => $request->ho_va_ten,
            'email' => $request->email,
            'so_dien_thoai' => $request->so_dien_thoai,
            'cccd' => $request->cccd,
            'ngay_sinh' => $request->ngay_sinh,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Đăng ký thành công',
            'user' => $user
        ]);
    }

    // Đăng nhập
    public function dangNhap(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => true,
                'message' => 'Đăng nhập thành công',
                'user' => $user
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Sai email hoặc mật khẩu'
        ]);
    }
}

