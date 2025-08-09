"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function CreatePackageForm() {
  const [coinVolume, setCoinVolume] = useState("800");
  const [priceAmount, setPriceAmount] = useState("5");
  const [extraBonus, setExtraBonus] = useState("20");
  const [showCoinVolume, setShowCoinVolume] = useState(false);

  return (
    <div>
      <h1 className="text-[#1a1a1a] text-2xl font-bold">Coin Management</h1>
      <div className="w-full mx-auto p-5 bg-white border rounded-xl border-[#E6E6E6] mt-7">
        <h1 className="text-xl font-semibold text-gray-900 mb-8">
          Create new package
        </h1>

        <div className="space-y-6">
          {/* Coin Volume */}
          <div>
            <label
              htmlFor="coinVolume"
              className="block text-base font-medium text-[#161616] mb-1"
            >
              Coin Volume
            </label>
            <div className="relative">
              <input
                id="coinVolume"
                type={showCoinVolume ? "password" : "text"}
                value={coinVolume}
                onChange={(e) => setCoinVolume(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-[#D9D9D9] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                placeholder="Enter coin volume"
              />
              <button
                type="button"
                onClick={() => setShowCoinVolume(!showCoinVolume)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D9D9D9] hover:text-gray-600 transition-colors"
              >
                {showCoinVolume ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Price Amount and Extra Bonus Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Amount */}
            <div>
              <label
                htmlFor="priceAmount"
                className="block text-base font-medium text-[#161616] mb-1"
              >
                Price amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  $
                </span>
                <input
                  id="priceAmount"
                  type="text"
                  value={priceAmount}
                  onChange={(e) => setPriceAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-gray-50 rounded-full border border-[#D9D9D9] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Extra Bonus */}
            <div>
              <label
                htmlFor="extraBonus"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Extra Bonus
              </label>
              <div className="relative">
                <input
                  id="extraBonus"
                  type="text"
                  value={extraBonus}
                  onChange={(e) => setExtraBonus(e.target.value)}
                  className="w-full pr-10 pl-4 py-3 bg-gray-50 border border-[#D9D9D9] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="0"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 font-medium">
                  %
                </span>
              </div>
            </div>
          </div>

          {/* Create Package Button */}
          <div className="">
            <button
              type="button"
              className="bg-gradient-to-r from-[#37B9FF] to-[#027BBD] hover:opacity-90 cursor-pointer text-white font-medium py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
