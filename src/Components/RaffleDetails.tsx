"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Heart,
  CheckCircle,
  Plus,
  Minus,
  Gift,
  Gem,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import plus from "@/assets/icons/plus.png";
import { useState } from "react";
import coin from "@/assets/icons/coin.png";
import minus from "@/assets/icons/minus.png";
import leptop from "@/assets/laptop.png";
import blueCheck from "@/assets/blueCheck.svg";
import { IoIosArrowBack } from "react-icons/io";

export default function RaffleDetailsPage() {
  const [progress, setProgress] = useState(34);
  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 34, 100));
  };
  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 34, 0));
  };

  return (
    <div className="  p-4 sm:p-6 lg:px-58  ">
      {/* Header */}
      <header className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="text-gray-600">
          <IoIosArrowBack className="w-5 h-5" />
          <span className="sr-only">Back</span>
        </Button>
        <span className="text-black -ml-3 text-sm font-medium">
          Raffle details
        </span>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Left Card: Product Image (65% on large screens) */}
        <Card className="relative p-4 w-full lg:w-[60%] flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden">
          <Image
            src={leptop}
            alt="MacBook Air 13-inch Laptop"
            width={600}
            height={400}
            className="object-contain w-full max-w-[600px] h-auto max-h-[400px]"
          />
          <div className="absolute top-3 left-3 p-1">
            <Image src={blueCheck} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500">
            <Heart className="h-6 w-6 sm:w-8 sm:h-8" />
            <span className="sr-only">Add to favorites</span>
          </button>
        </Card>

        {/* Right Card: Product Details (35% on large screens) */}
        <Card className="p-4 sm:p-6 bg-white rounded-xl w-full lg:w-[40%] shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-tight">
              MacBook Air 13-inch Laptop with M3 chip 32 GB RAM 512 SSD 13 inch Display
            </h1>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex items-center justify-between mb-1">
              {/* Minus Button */}
              <button onClick={decreaseProgress}>
                <Image src={plus} alt="Minus" className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Rating Display */}
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <Image src={coin} alt="Coin" />
                </div>
                <span className="text-lg sm:text-xl font-medium text-gray-900">
                  105
                </span>
              </div>

              {/* Plus Button */}
              <button onClick={increaseProgress}>
                <Image
                  src={minus}
                  alt="Plus"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-fill"
                />
              </button>
            </div>

            {/* Enter Button */}
            <button className="w-full mb-3 mt-3 bg-gradient-to-r from-[#FC9440] to-[#E45C04] hover:opacity-90 text-white font-medium text-lg sm:text-xl py-2.5 px-6 rounded-full transition-all shadow-lg">
              Enter
            </button>
          </div>
        </Card>
      </div>



      {/* Bottom Section */}
      <div className="flex  justify-between items-start sm:items-center mb-6">
        <span className="bg-gradient-to-r from-[rgba(55,185,255,1)] to-[rgba(2,123,189,1)]  text-white text-xs md:text-lg font-semibold px-4 py-2 rounded-full mb-4 sm:mb-0">
          Electronics
        </span>
        <span className="text-black text-sm">Raffle ID: RF651011</span>
      </div>

      <div className="  rounded-xl ">
        <h2 className="text-xl font-bold mb-4 flex items-center underline">
          <Gift className="h-6 w-6 mr-2 text-orange-500 fill-orange-500" />
          Raffle Prize Information
        </h2>
        <p className="text-black mb-4">
          Win a MacBook Air 13&quot; with M3 Chip!
        </p>
        <p className="text-black mb-4">
          Experience power, portability, and performance like never before. The
          all-new MacBook Air with the M3 chip delivers lightning-fast speed,
          ultra-efficient battery life, and a sleek, lightweight design —
          perfect for work, creativity, or everyday use. Whether you&apos;re a
          student, professional, or tech lover, this is the ultimate prize you
          don&apos;t want to miss.
        </p>
        <p className="text-gray-700 flex items-center">
          <Gem className="h-5 w-5 mr-2 text-red-500 fill-red-500" />
          Use your coins to enter now and get a chance to win big!
        </p>
      </div>
    </div>
  );
}
