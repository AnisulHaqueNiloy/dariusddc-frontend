"use client";

import { Card } from "@/Components/ui/card";
import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import WishlistCard from "./WishlistCard";

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
const Wishlistpage = () => {
  const [activeTab, setActiveTab] = useState("wishlist");
  return (
    <div className="max-w-7xl sm:mx-auto p-4 space-y-6">
      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {[
          { label: "Active Raffle", value: 15 },
          { label: "Total Win", value: 120 },
          { label: "Participated", value: 145 },
        ].map(({ label, value }) => (
          <Card
            key={label}
            className="flex-1 bg-gradient-to-br from-blue-300 to-blue-600 text-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6"
          >
            <h2 className="text-4xl font-bold">{value}</h2>
            <p className="mt-2 text-lg font-medium">{label}</p>
          </Card>
        ))}
      </div>
      {/* -filter wishlist---- */}
      <div>
        <div className="flex max-w-2xl mx-auto w-fit rounded-3xl gap-4 p-2 bg-[#1D9BDF] ">
          {tabs.map(({ id, label, icon }) => {
            const isActive = id === activeTab;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
              ${
                isActive
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-blue-400 text-white hover:bg-blue-500"
              }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      {/* --------product card */}
      <div>
        <WishlistCard />
      </div>
    </div>
  );
};

export default Wishlistpage;
