import React from "react";
import { BsCalendarDay, BsEnvelope, BsPhoneFlip } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Card } from "@/Components/ui/card";

import PurchaseccoinCard from "../myraffles/PurchaseccoinCard";
const Profile = () => {
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

            {/* Contact / About Section */}
            <Card className="p-6 rounded-xl shadow-lg bg-white">
                <h3 className="text-xl font-semibold mb-4">About Information</h3>
                <div className="space-y-3 text-gray-700">
                    <div className="flex items-center gap-3">
                        <BsPhoneFlip className="text-blue-600 w-5 h-5" />
                        <span>+1234567890</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <BsEnvelope className="text-blue-600 w-5 h-5" />
                        <span>email@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiMapPin className="text-blue-600 w-5 h-5" />
                        <span>6391 Elgin St. Celina, Delaware 10299</span>
                    </div>
                </div>
            </Card>
            {/* ----------coins-------------------- */}
            <div className="flex items-center justify-between  p-4 ">
                <h1 className="text-2xl text-[#1A1A1A] font-semibold">Coin Packages</h1>
                <button className="underline font-semibold text-[#1A1A1A]">
                    see all
                </button>
            </div>
            {/* ------ Purrchassionpage----------- */}
            <PurchaseccoinCard />
        </div>
    );
};

export default Profile;
