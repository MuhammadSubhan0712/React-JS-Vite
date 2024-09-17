import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate , Link } from "react-router-dom";
import { auth } from "../Config/Firebase/firebaseconfig";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Register user
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        navigate("login");
      })
      .catch((error) => {
        console.log("Error==>", error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter your username"
              required
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
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Password
              </span>
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Confirm Password
              </span>
            </label>
            <input
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
            <button className="text-blue-500 hover:underline">
            <Link to="login">
            Log in
            </Link>
            </button>
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
