import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "./assets/bg.jpg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Black overlay over the whole page */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Content container */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left section */}
        <div className="hidden md:flex w-1/2 flex-col justify-center px-10 text-white">
          <h1 className="text-4xl font-bold mb-4">Hybrix</h1>
          <h2 className="text-3xl font-semibold mb-2">
            Start your journey with us.
          </h2>
          <p className="text-lg font-medium">
            It brings together your tasks, <br />
            projects, timelines, files and more.
          </p>
        </div>

        {/* Right section - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">Welcome,</h2>
            <p className="text-center text-gray-600 mb-6">
              Login to continue to ENTRA.
            </p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div className="flex justify-between items-center mb-4 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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
