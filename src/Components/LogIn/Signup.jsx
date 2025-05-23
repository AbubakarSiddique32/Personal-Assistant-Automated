import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sex: "",
    mobile: "",
    address: "",
    postal: "",
    country: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic or redirect
    console.log(formData);
    navigate("/dashboard"); // Example navigation
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-gray-100 to-pink-50 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="sex"
              onChange={handleChange}
              value={formData.sex}
              required
              placeholder="Sex"
              className="border p-2 rounded w-full"
            />
            <input
              name="mobile"
              type="tel"
              onChange={handleChange}
              value={formData.mobile}
              required
              placeholder="Mobile Number"
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            name="address"
            onChange={handleChange}
            value={formData.address}
            required
            placeholder="Address"
            className="border p-2 rounded w-full"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="postal"
              onChange={handleChange}
              value={formData.postal}
              required
              placeholder="Postal Code"
              className="border p-2 rounded w-full"
            />
            <input
              name="country"
              onChange={handleChange}
              value={formData.country}
              required
              placeholder="Country"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Upload Photo
            </label>
            <input
              type="file"
              name="photo"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="relative">
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              onChange={handleChange}
              value={formData.password}
              required
              placeholder="Create Password"
              className="border p-2 rounded w-full"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-2 text-sm text-gray-600"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <p className="text-xs text-gray-600 text-center">
            By creating an account, you agree to our
            <span className="underline cursor-pointer">Terms of Use</span> and
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
          >
            Create an account
          </button>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="https://www.google.com"
            className="flex items-center justify-center gap-2 border p-2 rounded w-full hover:bg-gray-100"
          >
            <img src="/images/google.png" alt="Google" className="w-5 h-5" />{" "}
            Continue with Google
          </a>
          <a
            href="https://apple.com"
            className="flex items-center justify-center gap-2 bg-black text-white p-2 rounded w-full hover:bg-gray-900"
          >
            <img src="/images/apple.png" alt="Apple" className="w-5 h-5" />{" "}
            Continue with Apple
          </a>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold text-black hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
