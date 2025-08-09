import CategoryMenu from "@/Components/home/banner/banerSidebar";
import PromoCarousel from "@/Components/home/banner/bannerAdd";
import EndingProducts from "@/Components/home/banner/EndingProducts";
import CategoryCarousel from "@/Components/home/CategoryCarusol";
import HeroSection from "@/Components/home/HeroSection";
import RecentsLists from "@/Components/home/RecentLists";
import TestimonialsCarousel from "@/Components/home/TestomonialCarusol";
import TombolyHowItWorks from "@/Components/home/TomboHowItwork";
import React from "react";

export default function Home() {
  return (
    <div className=" px-5">
      <div className="flex  flex-col md:flex-row max-w-[1600px] mx-auto px-4 sm:px-0 lg:gap-16">
        <div className="md:w-[250px] flex-shrink-0">
          <CategoryMenu />
        </div>
        <div className="flex-1 ">
          <PromoCarousel />
          <EndingProducts />
        </div>
      </div>
      <div className="max-w-[1600px] space-y-16 mx-auto px-4  mt-16 md:px-0">

        <CategoryCarousel />
        <RecentsLists />
        <TombolyHowItWorks />
        <TestimonialsCarousel />
      </div>
      <HeroSection />
    </div>
  );
}

