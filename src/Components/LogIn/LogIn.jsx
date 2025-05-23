import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (value) => {
    setEmail(value);
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    setEmailError(!regex.test(value));
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordError(value.length < 8);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gray-100 to-pink-100 py-24 px-5">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-left text-gray-800 mb-6 font-poppins">
          Log in
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-gray-600 mb-1 font-poppins"
            >
              Email address or user name
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              required
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {emailError && (
              <span className="text-red-500 text-sm">
                Please enter a valid email address.
              </span>
            )}
          </div>

          <div className="relative text-left">
            <label
              htmlFor="password"
              className="block text-gray-600 mb-1 font-poppins"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
              minLength={6}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-4 cursor-pointer flex items-center text-sm text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </div>
            {passwordError && (
              <span className="text-red-500 text-sm block mt-1">
                Password must be at least 8 characters long.
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="w-4 h-4" />
            <label htmlFor="remember" className="text-gray-700 font-poppins">
              Remember me
            </label>
          </div>

          <p className="text-gray-600 text-base">
            By continuing, you agree to the
            <a href="#" className="text-blue-600 underline">
              Terms of use
            </a>
            and
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-500"
          >
            Log in
          </button>
        </form>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="https://www.google.com/intl/en-GB/account/about/"
            className="flex items-center gap-3 px-4 py-3 border rounded-lg bg-white shadow-sm w-full justify-center"
          >
            <FcGoogle className=" h-6 w-6" />
            Continue with Google
          </a>
          <a
            href="https://support.apple.com/en-mide/111001"
            className="flex items-center gap-3 px-4 py-3 border rounded-lg bg-black text-white w-full justify-center"
          >
            <FaApple className="h-6 w-6" />
            Continue with Apple
          </a>
        </div>

        <div className="mt-6 text-sm">
          <p className="mb-2 text-gray-800">
            <Link to="/forget" className="text-blue-600 underline">
              Forget your password
            </Link>
          </p>
          <p className="text-gray-800">
            Don’t have an account?
            <Link to="/signup" className="text-blue-600 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
