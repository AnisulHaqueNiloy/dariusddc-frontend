"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import promoImage from "../../../assets/bannerPromo.png";

import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/Components/ui/button";

export default function PromoCarousel() {
  const slides = [
    {
      title: "Raffle Online",
      subtitle: "Win quality products with easy to use coins.",
      buttonText: "Get Started Now",
      image: promoImage,
    },
    {
      title: "Big Sale",
      subtitle: "Grab your favorite products at unbeatable prices.",
      buttonText: "Shop Now",
      image: promoImage,
    },
    {
      title: "New Arrivals",
      subtitle: "Discover our latest collection of exciting products.",
      buttonText: "Explore Now",
      image: promoImage,
    },
  ];

  return (
    <div className="w-full max-w-[1180px] mt-5 mx-auto me-9">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl promo-carousel-pagination overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-[#0099E6] px-4 sm:px-6 md:px-8 rounded-2xl overflow-hidden h-[362px]">
              
              {/* Text Section */}
              <div className="w-full md:w-1/2 lg:w-[45%] text-center md:text-left text-white md:pr-6 lg:pr-12 py-6 md:py-8">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-6 md:mb-8">
                  {slide.subtitle}
                </p>
                <Button
                  className="font-semibold text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 rounded-full cursor-pointer
                             bg-[linear-gradient(to_right,_#37B9FF,_#027BBD)]
                             shadow-[inset_0px_4px_6px_rgba(255,255,255,0.3)]
                             text-white transition-all duration-200
                             hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0099E6]"
                >
                  {slide.buttonText}
                </Button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2 lg:w-[55%] flex justify-center items-center relative mt-4 md:mt-0">
                <div className="relative w-full max-w-[500px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-[380px] xl:h-[420px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
