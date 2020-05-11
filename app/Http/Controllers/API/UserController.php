<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|alpha',
            'last_name' => 'required|alpha',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:5',
        ]);

        if (!empty($validatedData)) {
            $user = User::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
            if ($user) {
                $success = [];
                $success['name']  = $user->first_name;
                $success['is_admin']  = $user->is_admin;
                $success['token'] = $user->createToken('app')->accessToken;
                return response()->json(['success' => $success], $this->successStatus);
            }
            return ['success' => false];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|alpha',
            'last_name' => 'required|alpha',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);
        if (!empty($validatedData)) {
            $user = User::find($id);
            if ($user) {
                $user->first_name = $request->input('first_name');
                $user->last_name = $request->input('last_name');
                $user->email = $request->input('email');
                if ($user->save()) {
                    return ['success' => true];
                }
                return ['success' => false];
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if ($user) {
            return ['success' => $user->delete()];
        }
        return ['success' => false];
    }

    /** 
     * Login API method
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(Request $request) {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (
            Auth::attempt(
                [
                    'email' => request('email'), 
                    'password' => request('password')
                ]
            )
        ) { 
            $user = Auth::user(); 
            $success = [];
            $success['name']  = $user->first_name;
            $success['is_admin']  = $user->is_admin;
            $success['token'] =  $user->createToken('app')->accessToken; 
            return response()->json(['success' => $success], $this->successStatus); 
        } else {
            return response()->json(['error' => 'Unauthorised'], 401); 
        } 
    }
}
