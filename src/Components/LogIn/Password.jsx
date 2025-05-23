import React, { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Add password reset logic here (e.g. API call)
    alert("Password successfully updated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-gray-100 to-pink-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl  p-6 ">
        <h1 className="text-[32px] font-semibold text-[#333333] mb-6  font-poppins">
          Enter Your New Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Re-enter New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-400 text-white text-lg font-medium py-2 rounded-full hover:bg-gray-500 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
