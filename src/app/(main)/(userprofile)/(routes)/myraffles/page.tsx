"use client";

import { Card } from "@/Components/ui/card";
import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import WishlistCard from "../wishlist/WishlistCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import Image from "next/image";
import logo1 from "@/assets/logo copy.png";
import reactangle from "@/assets/Rectangle 138.png";
import { Separator } from "@/Components/ui/separator";
import RaffleCard from "./RaffleCard";

const tabs = [
  { id: "all", label: "All Raffle" },
  { id: "active", label: "Active" },
  { id: "wins", label: "Wins" },
  {
    id: "wishlist",
    label: "Wishlist",
    icon: <FaHeart className="inline-block ml-1" />,
  },
];
const MyRafflespage = () => {
  const [activeTab, setActiveTab] = useState("wishlist");
  console.log(activeTab);
  return (
    <div className="w-full p-4 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3 lg:hidden ">
        {/* User Profile Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Hazel Wise" />
            <AvatarFallback>HW</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900">Hazel Wise</h3>
            <p className="text-sm text-gray-500">hazel.wise@gmail.com</p>
          </div>
        </div>

        {/* Points Display */}
        <div className="flex items-center gap-2">
          <div className="    rounded-full flex items-center justify-center space-x-2">
            <Image src={logo1} alt="logo" width={25} height={25} />
            <span className="text-[#000000] text-lg sm:text-2xl font-semibold">11,005</span>
            <Image src={reactangle} alt="logo" width={15} height={15} />
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      {/* Stats Section */}
      <div className="flex flex-row gap-3 sm:gap-4">
        {[
          { label: "Active Raffle", value: 15 },
          { label: "Total Win", value: 120 },
          { label: "Participated", value: 145 },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex-1 bg-[linear-gradient(180deg,#37B9FF_0%,#027BBD_100%)] text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-2 sm:p-4"
          >
            <h2 className="text-center text-lg sm:text-2xl md:text-4xl font-bold">{value}</h2>
            <p className="text-center text-sm sm:text-lg font-medium mt-1">{label}</p>
          </div>
        ))}
      </div>
      {/* -filter wishlist---- */}
      <div>
        <div className="flex max-w-xl mx-auto rounded-3xl gap-4 p-2 bg-[#1D9BDF] items-center justify-between">
          {tabs.map(({ id, label, icon }) => {
            const isActive = id === activeTab;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`cursor-pointer w-full sm:px-6 sm:py-2 px-3 py-1 rounded-full text-[10px] sm:text-sm font-medium transition-colors duration-300
              ${isActive ? "orange-Btn text-white shadow-md" : "bg-[#FFFFFF36] text-white hover:bg-[#ffffff15]"}`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      {/* --------product card */}
      <div>
        <RaffleCard />
      </div>
    </div>
  );
};

export default MyRafflespage;