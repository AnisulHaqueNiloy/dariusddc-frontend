import { IProduct } from "@/types/product.type";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import minus from "@/assets/icons/minus.png";
import plus from "@/assets/icons/plus.png";
import coin from "@/assets/icons/coin.png";
interface IProps {
  product: IProduct;
  toggleFavorite?: (productId: number) => void;
}

import setting_icon from "@/assets/icons/Group 1000005942.png";
import { useState } from "react";
import Link from "next/link";
export default function ProductCard({ product, toggleFavorite }: IProps) {
  const [progress, setProgress] = useState(34);
  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 34, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 34, 0));
  };
  return (
    <div className="w-full ">
      {/* Product Card */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Product Image Container */}
        <div className="relative">
          <div className="flex absolute w-full justify-between items-center px-3 py-3">
            {/* Blue gear icon - top left */}
            <div className="">
              <Image
                src={setting_icon}
                className=" "
                height={20}
                width={20}
                alt="Setting icon"
              />
            </div>

            {/* Heart icon - top right */}
            <button
              //   onClick={toggleFavorite}
              className=" rounded-full bg-white "
            >
              <Heart size={24} className="" />
            </button>
          </div>

          {/* MacBook Image */}
          <div className="">
            <Image
              src={product?.image as string}
              alt="MacBook Air"
              className="object-cover "
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="px-3 bg-white">
          <h2 className="md:text-2xl  text-sm font-bold text-gray-900 mb-6">
            {product?.name}
          </h2>

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
            <button onClick={decreaseProgress} className="">
              <Image src={plus} alt="PLus" />
            </button>

            {/* Rating Display */}
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-orange-400 rounded-full flex items-center justify-center">
                <Image src={coin} alt="PLus" />
              </div>
              <span className="text-xl font-medium text-gray-900">105</span>
            </div>

            {/* Plus Button */}
            <button onClick={increaseProgress} className="">
              <Image src={minus} alt="PLus" className="object-fill aspect-auto" />
            </button>
          </div>





          {/* Enter Button */}
          <Link href={`/profile-details-page`} className="w-full inline-block text-center mb-3 mt-3 bg-gradient-to-r from-[#FC9440] to-[#E45C04] cursor-pointer hover:bg-orange-600 text-white font-medium text-xl py-2.5 px-6 rounded-full transition-colors shadow-lg"> Enter </Link>
        </div>
      </div>
    </div>
  );
}

