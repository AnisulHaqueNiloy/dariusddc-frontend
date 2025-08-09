"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import laptop from "../../../assets/laptop.png";
import watch from "@/assets/watch.png";

import { IProduct } from "@/types/product.type";
import ProductCard from "@/Components/shared/ProductCard";

const products: IProduct[] = [
  { id: 1, name: "MacBook Air 256gb", image: laptop, rating: 105, isFavorited: false, category: "laptop" },
  { id: 2, name: "MacBook Air 256gb", image: watch, rating: 105, isFavorited: false, category: "watch" },
  { id: 3, name: "MacBook Air 256gb", image: laptop, rating: 105, isFavorited: false, category: "laptop" },
  { id: 4, name: "MacBook Air 256gb", image: watch, rating: 105, isFavorited: false, category: "watch" },
  { id: 5, name: "MacBook Air 256gb", image: laptop, rating: 105, isFavorited: false, category: "laptop" },
  { id: 6, name: "MacBook Air 256gb", image: watch, rating: 105, isFavorited: false, category: "watch" },
  { id: 7, name: "MacBook Air 256gb", image: laptop, rating: 105, isFavorited: false, category: "laptop" },
  { id: 8, name: "MacBook Air 256gb", image: watch, rating: 105, isFavorited: false, category: "watch" },
];

export default function EndingProducts() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const swiperRef = useRef<any>(null);

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="relative max-w-[1180px] mx-auto w-full    me-9">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ending Soon</h1>

        {/* See More button on mobile only */}
        <a
          href="/products" // Adjust URL as needed
          className="sm:hidden text-orange-500 font-semibold text-base hover:underline"
        >
          See More
        </a>
      </div>

      {/* Navigation buttons fixed top-right, hidden on mobile */}
      <div className="hidden sm:flex absolute top-0 right- sm:right-0 space-x-3 z-20">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-full text-orange-500 border border-orange-500 flex items-center justify-center cursor-pointer transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Swiper container */}
      <div className="overflow-hidden ">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{

            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },

          }}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                toggleFavorite={toggleFavorite}
                product={{
                  ...product,
                  isFavorited: favorites.has(product.id),
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
