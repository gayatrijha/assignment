import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./assets/bg.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required.";
      hasError = true;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // If no validation errors, proceed
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left section */}
        <div className="hidden md:flex w-1/2 flex-col px-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Hybrix</h1>
          <div className="flex flex-col flex-1 justify-center">
            <h2 className="text-3xl font-semibold mb-2">
              Start your journey with us.
            </h2>
            <p className="text-lg font-medium">
              It brings together your tasks, <br />
              projects, timelines, files and more.
            </p>
          </div>
        </div>

        {/* Right section - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-md">
            <h2 className="text-2xl font-bold text-center mb-2">Welcome,</h2>
            <p className="text-center text-black mb-6 font-normal">
              Login to continue to ENTRA.
            </p>

            <form onSubmit={handleLogin} noValidate>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-2 border rounded-lg ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full px-4 py-2 border rounded-lg ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="flex justify-between flex-col mb-4 text-sm">
                <a href="#" className="mb-2 hover:underline">
                  Forgot Password?
                </a>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-10 mt-2 shadow-2xl transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
