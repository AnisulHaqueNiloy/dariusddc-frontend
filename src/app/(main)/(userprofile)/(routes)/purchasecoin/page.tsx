import coin from "@/assets/percesCoin.png";
import coinsingle from "@/assets/icons/coin.png";
import tringel from "@/assets/Rectangle.svg";
import { ChevronLeft } from "lucide-react";

export default function page() {
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
  return (
   <div>
      <div className="ml-1 md:ml-0">
        {/* Coin Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          {/* header part start  */}
          <header className=" mb-6 mt-4 flex items-center gap-2">
            <span className="block md:hidden text-black">
              <ChevronLeft className="w-5 h-5" />
            </span>
            <h1 className="block md:hidden text-sm  font-bold text-gray-800">
              Purchase Coin
            </h1>
          </header>
          <div className="mb-6">
            <div className="block md:hidden">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="block text-lg font-bold text-[#303030]">
                  Current Balance
                </h2>
                <h2 className="flex items-center text-xl font-bold text-[#303030]">
                  <img src={coinsingle.src} alt="" className="h-5 w-5" />
                  <span className="mx-1">11,005</span>
                  <img src={tringel.src} alt="" className="h-5 w-5" />
                </h2>
              </div>
              <h2 className=" text-lg font-bold mt-2  text-[#303030]">
                Available Packages
              </h2>
            </div>
            <h2 className="hidden md:block text-3xl font-bold text-[#303030]">
              Purchase Coin
            </h2>
          </div>
          {/* header part start  */}
          {/* coin cart start here  */}
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
                        typeof pkg?.image === "string"
                          ? pkg.image
                          : pkg?.image.src
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

        {/* Footer */}
      </div>
    </div>
  );
}
