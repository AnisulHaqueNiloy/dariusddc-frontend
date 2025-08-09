"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo1 from "@/assets/logo copy.png";
import reactangle from "@/assets/Rectangle 138.png";
import { FiUser, FiLock, FiGift, FiDollarSign, FiLogOut, FiChevronRight, FiMenu } from "react-icons/fi";

interface MenuItem {
  id: number;
  name: string;
  icon: React.ElementType;
  path: string;
  active?: boolean;
}

export default function UserProfileSidebar() {
  const usermenuList: MenuItem[] = [
    {
      id: 1,
      name: "Edit Profile",
      icon: FiUser,
      path: "editprofile",
    },
    { id: 2, name: "Change Password", icon: FiLock, path: "changepassword" },
    { id: 3, name: "My Raffles", icon: FiGift, path: "myraffles" },
    { id: 4, name: "Purchase Coin", icon: FiDollarSign, path: "purchasecoin" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleNavigation = (path: string, index: number) => {
    setActiveIndex(index);
    router.push(`/${path}`);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="  ">
      <div className="flex">
        {/* Sidebar - only show on md+ */}
        <div className=" w-full md:w-64 lg:w-72    min-h-screen hidden lg:block">
          <div className="p-6">
            {/* User Profile Section */}
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Hazel Wise" />
                <AvatarFallback>HW</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">Hazel Wise</h3>
                <p className="text-sm text-gray-500">hazel.wise@gmail.com</p>
              </div>
            </div>

            {/* Points Display */}
            <div className="flex items-center gap-2 mb-6">
              <div className="    rounded-full flex items-center justify-center space-x-2">
                <Image src={logo1} alt="logo" width={25} height={25} />
                <span className="text-[#000000] text-2xl font-semibold">11,005</span>
                <Image src={reactangle} alt="logo" width={15} height={15} />
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Menu Items */}
            <nav className="space-y-2">
              {usermenuList.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path, index)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${item.active || activeIndex === index
                    ? "bg-blue-50  text-xl text-blue-600 border border-blue-200"
                    : "text-[#000000] text-xl hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {/* <item.icon className="w-5 h-5" /> */}
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-gray-800" />
                </button>
              ))}
            </nav>

            {/* Logout */}
            <div className="mt-8">
              <Separator className="mb-4" />
              <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors">
                <FiLogOut className="w-5 h-5" />
                <span className="font-medium text-[#FF2D55]">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Bar - only show on small devices */}
        <div className="fixed bottom-0 left-0 w-full  px-4 py-2 flex items-center justify-between lg:hidden z-50">
          {/* Coins */}
          <div className="flex items-center gap-1">
            <div className="rounded-full flex items-center justify-center space-x-2">
              <Image src={logo1} alt="logo" width={25} height={25} />
              <span className="font-semibold">11,005</span>
              <Image src={reactangle} alt="logo" width={15} height={15} />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            {/* Search */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            {/* -------------------Profile -----------------------*/}
            <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 10a4 4 0 110-8 4 4 0 010 8zm-7 9a7 7 0 1114 0H3z" />
            </svg>

            {/*----------- Hamburger Menu--------------------- */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/*--------------------- Mobile Dropdown Menu----------------------- */}
        {isMobileMenuOpen && (
          <div className="fixed bottom-14 left-0 w-full bg-white shadow-lg block lg:hidden z-50">
            {usermenuList.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavigation(item.path, index);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 border-b hover:bg-gray-50"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">{item.name}</span>
              </button>
            ))}

            {/*--------- Logout-----------------*/}
            <button onClick={() => console.log("Logout")} className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-gray-50">
              <FiLogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
