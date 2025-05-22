import React, { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent to " + email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gray-100 to-pink-100 py-32 px-5">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-medium text-left text-gray-800 mb-4 font-poppins">
          Forget Your Password?
        </h1>
        <p className="text-base text-gray-600 text-left mb-6 font-poppins">
          Enter your email address below and we’ll send you a link to reset your
          password
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="w-full p-4 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gray-400 text-white text-lg rounded-full hover:bg-gray-500 transition-colors"
          >
            Send Reset Password Link
          </button>
        </form>
      </div>
    </div>
  );
}
