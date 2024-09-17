import { signInWithEmailAndPassword } from "firebase/auth";
import React , { useRef } from "react";
import {Outlet, useNavigate} from "react-router-dom";
import { auth } from "../Config/Firebase/firebaseconfig";

const Login = () => {
const email = useRef();
const password = useRef();
const navigate = useNavigate();

const reg = () => {
  navigate('/register')
}

// Login User Function / Firebase 
const loginUser = ((event) => {
    event.preventDefault();

signInWithEmailAndPassword(
    auth, 
    email.current.value,
    password.current.value,
)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    navigate('todo')
    
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log("Error==>" ,errorMessage);
  });
});

    return (
        <>
        <Outlet />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
  

          {/* Login Form */}
          <form onSubmit={loginUser} className="space-y-6">

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input            
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email" ref={email}
                />
              </div>
            </div>
  
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password" ref={password}
                />
              </div>
            </div>
  
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
  
               {/* <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </a>
              </div> */}
              </div>
            <div>
              <button
              type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Do not have an account?{" "}
              <button onClick={reg} className="text-purple-600 hover:text-purple-500 font-medium">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default Login;
  