'use client';

import Image from "next/image";
import { Search, Heart, User, ChevronDown, AlignLeft } from 'lucide-react';
import usa from "@/assets/usa.png";
import logo1 from "@/assets/logo copy.png";
import reactangle from "@/assets/Rectangle 138.png";
import bg from "@/assets/bg_image.png";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full">
      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div >
                <Image src={logo1} alt="logo" width={40} height={40} />
              </div>
              <span className="text-xl font-bold text-gray-900">Tomboly</span>
            </div>

            {/* Search Bar (Hidden on mobile) */}
            <div className="flex-1 max-w-lg mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search anything you need"
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none "
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Wishlist (Hidden on mobile) */}
              <button className="p-2 hover:bg-gray-50 rounded-md transition-colors hidden sm:block">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>

              {/* Account (Hidden on mobile) */}
              <Link href="/register">
                <button className="flex items-center space-x-1 p-2 hover:bg-gray-50 rounded-md transition-colors">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className=" text-gray-700">Account</span>
                </button>
              </Link>

              {/* Language Selector (Now visible on all screen sizes) */}
              <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                <Image src={usa} width={20} height={20} alt="usa" />
                <span className=" text-gray-700">ENG</span>
                <ChevronDown className="h-5 w-5 text-gray-600" />
              </button>

              {/* Mobile Menu Button has been removed */}
            </div>
          </div>

          {/* Mobile Search bar has been removed */}
        </div>
      </header>

      <div style={{ background: 'linear-gradient(to right, #1BBEFF, #0089C0)' }} className=" text-white text-center py-2 text-sm flex items-center justify-center gap-2">
        <span className="text-2xl font-semibold">✨</span>
        Hazel from NY just won a MacBook Air
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block "
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',       // or 'contain' depending on your need
          backgroundPosition: 'center',  // center the image
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side - Category and Nav Items */}
            <div className="flex items-center space-x-6">
              {/* Category Button */}
              <button className="flex items-center space-x-2     px-3     transition-colors">
                <AlignLeft className="h-5 w-5 " />
                <span className=" font-medium">Category</span>
              </button>

              {/* Navigation Items */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className=" hover:bg-blue-600 px-2  rounded transition-colors">
                  Popular
                </button>
                <button className=" hover:bg-blue-600 px-2  rounded transition-colors">
                  Best Deals
                </button>
                <button className=" hover:bg-blue-600 px-2  rounded transition-colors">
                  Recently Viewed
                </button>
                <button className=" hover:bg-blue-600 px-2  rounded transition-colors">
                  Trending
                </button>
                <button className=" hover:bg-blue-600 px-2  rounded transition-colors">
                  Raffle Draw
                </button>
              </div>
            </div>

            {/* Right Side - Balance */}
            <div className="flex items-center">
              <div className="   px-3 py-1 rounded-full flex items-center justify-center space-x-2">
                <Image src={logo1} alt="logo" width={25} height={25} />
                <span className="  font-semibold">11,005</span>
                <Image src={reactangle} alt="logo" width={15} height={15} />

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
