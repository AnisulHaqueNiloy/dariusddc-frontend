"use client";

import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-0 md:p-4 rounded-2xl md:rounded-none">
      <div className="w-full max-w-xl p-8  rounded-2xl shadow-2xl bg-gradient-to-br from-[#37B9FF] to-[#027BBD] text-white relative border-6 border-white">
        {/* Close button */}
        <button className="absolute top-6 right-6 p-2 cursor-pointer border-2 border-white rounded-full hover:bg-white/20 transition-colors duration-200">
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Header */}
        <h2 className="text-4xl font-bold mb-8 text-white">Login</h2>

        {/* Name Input */}
        <div className="mb-6">
          <label
            className="block text-white text-lg font-medium mb-3"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition-all duration-200 text-lg"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            className="block text-white text-lg font-medium mb-3"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 pr-14 rounded-2xl bg-white text-gray-900 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-300
                         transition-all duration-200 text-lg"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-6 w-6" />
              ) : (
                <Eye className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Remember me and Forget Password */}
        <div className="flex items-center justify-between mb-8">
          <label className="flex items-center text-white cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 mr-3"
            />
            <span className="text-md md:text-lg ">Remember me</span>
          </label>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors duration-200 text-md  md:text-lg underline"
          >
            Forget Password
          </a>
        </div>

        {/* Sign in button */}
        <Link href={"/profile"}>
          <button
            type="submit"
            className="w-full  cursor-pointer py-4 rounded-xl text-white font-bold text-lg
             shadow-[inset_3px_1px_4px_0_#FFFFFF]
             hover:bg-blue-100 transition-all duration-200
             transform hover:scale-105 active:scale-100
             bg-gradient-to-br from-[#37B9FF] to-[#027BBD]"
          >
            Sign in
          </button>
        </Link>

        {/* Separator */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-t border-white/50" />
          <span className="px-4 text-white text-lg">or</span>
          <hr className="flex-grow border-t border-white/50" />
        </div>

        {/* Continue with Google button */}
        <button
          type="button"
          className="w-full cursor-pointer py-4 flex items-center justify-center space-x-3 rounded-2xl gap-4
                     bg-white text-gray-700 font-semibold text-lg shadow-lg 
                     hover:bg-gray-50 transition-colors duration-200 mb-8"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              fill="#EA4335"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              fill="#34A853"
            />
          </svg>
          Continue with Google
        </button>

        {/* Register link */}
        <div className="text-center text-white">
          <span className=" text-md md:text-lg">Don't have an account? </span>
          <Link
            href="/register"
            className=" text-md md:text-lg  underline hover:text-blue-200 transition-colors duration-200"
          >
            Register Now.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
