import React from "react";
import coin from "@/assets/percesCoin.png";

const coinPackages = [
  {
    coins: 100,
    price: 5.0,
    image: coin,
  },
  {
    coins: 100,
    price: 5.0,
    image: coin,
  },
  {
    coins: 500,
    price: 10.0,
    image: coin,
  },
  {
    coins: 800,
    price: 5.0,
    image: coin,
  },
  {
    coins: 800,
    price: 5.0,
    image: coin,
  },
  {
    coins: 1200,
    price: 10.0,
    image: coin,
  },
  {
    coins: 1600,
    price: 5.0,
    image: coin,
  },
  {
    coins: 1600,
    price: 5.0,
    image: coin,
  },
  {
    coins: 2200,
    price: 10.0,
    image: coin,
  },
];
const PurchaseccoinCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
        {coinPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative  bg-gradient-to-b from-[#37B9FF] to-[#027BBD] rounded-3xl p-5 hover:shadow-xl transform hover:scale-105 transition-all duration-300 "
          >
            {/* Discount Badge */}
            <div className="absolute top-0 left-0 bg-white text-[#FA731C] text-xs md:text-xl font-medium px-4 py-1 rounded-br-2xl rounded-tl-2xl ">
              25% OFF
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center pt-0 md:pt-8 pb-1">
              {/* Coin Image */}
              <div className="w-20 h-18 mb-0 md:mb-2 flex items-center justify-center">
                <img
                  src={
                    typeof pkg?.image === "string" ? pkg.image : pkg?.image.src
                  }
                  alt="Gold coins stack"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              {/* Coin Amount */}
              <h3 className="text-white text-base md:text-2xl font-semibold mb-1 md:mb-2">
                {pkg.coins.toLocaleString()} Coins
              </h3>

              {/* Buy Button */}
              <button className="w-full bg-gradient-to-r from-[#FC9440] to-[#E45C04] text-center text-sm md:text-xl font-normal cursor-pointer shadow-[inset_1.5px_1px_2px_#ffffff] hover:from-orange-600 hover:to-orange-700 text-white py-2 px-6 rounded-full transform hover:scale-105 transition-all duration-200 active:scale-95 whitespace-nowrap">
                Buy for ${pkg.price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseccoinCard;
