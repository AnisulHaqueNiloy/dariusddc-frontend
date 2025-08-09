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
    <div className=" ">

      <div className="flex flex-col xl:flex-row max-w-[1600px] mx-auto px-4 xl:px-0 gap-8">


        <div className="hidden xl:block xl:w-64 flex-shrink-0">
          <CategoryMenu />
        </div>



        <div className="flex-1 space-y-8">
          <PromoCarousel />
          <EndingProducts />
        </div>
      </div>



      <div className="max-w-[1600px] w-full mx-auto px-4 xl:px-0 mt-16 space-y-16">
        <CategoryCarousel />
        <RecentsLists />
        <TombolyHowItWorks />
        <TestimonialsCarousel />
      </div>
      <HeroSection />
    </div>
  );
}
