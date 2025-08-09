import HeadLine from "@/Components/dashboard-components/HeadLine";
import NewUsers from "@/Components/dashboard-components/NewUsers";
import RaffleTable from "@/Components/dashboard-components/RaffleTable";
import Users from "@/Components/dashboard-components/Users";
import WelcomeStats from "@/Components/dashboard-components/WelcomeStats";

import Image from "next/image";
import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const DashboardPage = () => {
  return (
    <div className="space-y-6 p-6">
      <HeadLine />
      <WelcomeStats />
      <NewUsers />
      <div className="px-6 flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-black">All Raffles</h2>
        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full font-medium text-base shadow hover:opacity-90 transition">
          View All
        </button>
      </div>
      <RaffleTable />
    </div>
  );
};

export default DashboardPage;
