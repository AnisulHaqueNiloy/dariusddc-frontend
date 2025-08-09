"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, X } from "lucide-react";
import Link from 'next/link';

// A simple SVG for the US flag to use in the location dropdown
const UsFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-5 w-5 mr-2"
  >
    <rect width="512" height="512" fill="#3c3c72" />
    <path fill="#fff" d="M0 64h512v48H0zm0 96h512v48H0zm0 96h512v48H0zm0 96h512v48H0zm0 96h512v48H0z" />
    <path fill="#e21c32" d="M0 64h512v48H0zm0 96h512v48H0zm0 96h512v48H0zm0 96h512v48H0zm0 96h512v48H0z" />
    <rect width="248" height="288" fill="#002868" />
    <g fill="#fff">
      <path d="M49 53L63 93 93 93 69 116 83 156 49 133 15 156 29 116 5 93 35 93 49 53z" />
      <path d="M125 53L139 93 169 93 145 116 159 156 125 133 91 156 105 116 81 93 111 93 125 53z" />
      <path d="M201 53L215 93 245 93 221 116 235 156 201 133 167 156 181 116 157 93 187 93 201 53z" />
      <path d="M49 181L63 221 93 221 69 244 83 284 49 261 15 284 29 244 5 221 35 221 49 181z" />
      <path d="M125 181L139 221 169 221 145 244 159 284 125 261 91 284 105 244 81 221 111 221 125 181z" />
      <path d="M201 181L215 221 245 221 221 244 235 284 201 261 167 284 181 244 157 221 187 221 201 181z" />
    </g>
  </svg>
);


const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('United States');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-0 md:p-4 rounded-3xl md:rounded-none">
      <div className="w-full max-w-2xl p-4 rounded-3xl shadow-2xl bg-gradient-to-br from-[#37B9FF] to-[#027BBD] text-white relative border-6 border-white">

        {/* Close button */}
        <button className="absolute top-6 right-6 flex  border-2 border-white items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-colors duration-200">
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold mb-3 text-white">
          Register
        </h2>

        {/* Name Input */}
        <div className="mb-3">
          <label className="block text-white text-md font-medium mb-3" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition-all duration-200 "
          />
        </div>

        {/* Mobile Input */}
        <div className="mb-3">
          <label className="block text-white text-md font-medium mb-3" htmlFor="mobile">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            placeholder="1234567890"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition-all duration-200 "
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label className="block text-white text-md font-medium mb-3" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="admin@app.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-full bg-white text-gray-900 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-blue-300
                       transition-all duration-200 "
          />
        </div>

        {/* Password and Confirm Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {/* Password Input */}
          <div>
            <label className="block text-white text-md font-medium mb-3" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="*******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-14 rounded-full bg-white text-gray-900 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-300
                           transition-all duration-200 "
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-white text-md font-medium mb-3" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="*******"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 pr-14 rounded-full bg-white text-gray-900 placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-300
                           transition-all duration-200 "
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="mb-6">
          <label className="block text-white text-md font-medium mb-3" htmlFor="location">
            Location
          </label>
          <div className="relative">
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 pl-12 rounded-full bg-white text-gray-900 appearance-none
                         focus:outline-none focus:ring-2 focus:ring-blue-300
                         transition-all duration-200 text-lg shadow-[0_0_0_2px_#37B9FF]"
            >
              <option value="United States" className="flex items-center">
                United States
              </option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              <UsFlag />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Register button */}
        <Link href={"/login"}>
          <button
            type="submit"
            className="w-full py-3 rounded-full text-white font-bold  cursor-pointer
                     shadow-[inset_3px_1px_4px_0_#FFFFFF]
                     hover:bg-blue-100 transition-all duration-200
                     transform hover:scale-105 active:scale-100
                     bg-gradient-to-br from-[#37B9FF] to-[#027BBD]"
          >
            Register
          </button>
        </Link>

        {/* Separator */}
        <div className="flex items-center my-3">
          <hr className="flex-grow border-t border-white/50" />
          <span className="px-4 text-white text-lg">or</span>
          <hr className="flex-grow border-t border-white/50" />
        </div>

        {/* Continue with Google button */}
        <button
          type="button"
          className="w-full py-3 flex items-center justify-center space-x-3 rounded-full gap-4 cursor-pointer
                     bg-white text-gray-700 font-semibold  shadow-lg 
                     hover:bg-gray-50 transition-colors duration-200 mb-6"
        >
          <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              fill="#EA4335" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              fill="#4285F4" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              fill="#FBBC05" />
            <path fillRule="evenodd" clipRule="evenodd"
              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              fill="#34A853" />
          </svg>
          Continue with Google
        </button>

        {/* Login link */}
        <div className="text-center text-sm  text-white">
          <span className="">Already have an account? </span>
          <Link
            href="/login"
            className="underline text-sm hover:text-blue-200 transition-colors duration-200"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
