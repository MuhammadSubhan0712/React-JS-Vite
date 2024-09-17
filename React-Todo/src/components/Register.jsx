import React, { useRef, useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/Firebase/firebaseconfig";



const Registration = () => {
const username = useRef();
const email = useRef();
const password = useRef();


const CreateUser = (event) => {
event.preventDefault();

createUserWithEmailAndPassword(
    auth, 
    email.current.value, 
    password.current.value
)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log("Error==>" , errorMessage);
  });
}

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (formData.password === formData.confirmPassword) {
      console.log("Form submitted:", formData);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Username</span>
            </label>
            <input
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter your username"
              required ref={username}
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Email</span>
            </label>
            <input

              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required ref={email}
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Password</span>
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required ref={password}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full hover:bg-blue-700">
              Register
            </button>
          </div>
        </form>

        {/* Login Redirect */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
