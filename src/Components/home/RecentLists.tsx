"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../shared/ProductCard";
import laptop from "../../assets/laptop.png";
import watch from "@/assets/watch.png";
import { IProduct } from "@/types/product.type";
import "swiper/css/grid";
const products: IProduct[] = [
  {
    id: 1,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 2,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 3,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 4,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 5,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 6,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 7,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 8,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 9,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 10,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 13,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 14,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 15,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 16,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 17,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 18,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
];

export default function RecentsLists() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
    <div className="min-h-auto ">
      <div className="max-w-[1600px]   mx-auto ">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recently Listed</h1>
          <div className="hidden md:flex items-center gap-2">
            <button
              className="rounded-full p-2 cursor-pointer hover:bg-[#FA6807]  bg-transparent group border border-[#FA6807] hover:text-white transition-colors duration-300"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous testimonial"
            >
              <ChevronLeft
                size={25}
                className=" text-[#FA6807] group-hover:text-white transition-colors duration-300"
              />
            </button>
            <button
              className="rounded-full p-2 cursor-pointer hover:bg-[#FA6807]  bg-transparent group border border-[#FA6807] hover:text-white transition-colors duration-300"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next testimonial"
            >
              <ChevronRight
                size={25}
                className=" text-[#FA6807] group-hover:text-white transition-colors duration-300"
              />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Grid]}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            0: {
              // Mobile
              slidesPerView: 2,
              spaceBetween: 10,
              grid: { rows: 2, fill: "row" },
            },
            768: {
              // Tablet
              slidesPerView: 3,
              spaceBetween: 20,
              grid: { rows: 2, fill: "row" },
            },
            1024: {
              // Desktop
              slidesPerView: 4,
              spaceBetween: 30,
              grid: { rows: 2, fill: "row" },
            },
          }}
          loop={true}
          grid={{
            rows: 2,
            fill: "row",
          }}
          className="w-full py-6 mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product?.id}>
              <ProductCard
                toggleFavorite={toggleFavorite}
                product={product}
                key={product?.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
