"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import shopingBag from '../../assets/shopingbag.svg'
import Image from "next/image"


interface Category {
  id: number
  name: string
  image: string
}

const categories: Category[] = [
  { id: 1, name: "Appliance", image: shopingBag },
  { id: 2, name: "Electronics", image: shopingBag },
  { id: 3, name: "Toys, Kids", image: shopingBag },
  { id: 4, name: "Gaming", image: shopingBag },
  { id: 5, name: "Care & Beauty", image: shopingBag },
  { id: 6, name: "Fashion", image: shopingBag },
  { id: 7, name: "Home Decor", image: shopingBag },
  { id: 8, name: "Books", image: shopingBag },
]

export default function CategoryCarousel() {
  const swiperRef = useRef<any>(null)

  return (
    <div className="w-full">
      <div className=" relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 2, // 4 cards on mobile as requested
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 6, // More items for medium/large screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          loop={true}
          className="w-full"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Card className="flex flex-col items-center justify-center p-4  shadow-none border-none rounded-lg cursor-pointer  transition-colors  bg-transparent">
                <CardContent className="p-0 flex flex-col items-center justify-center text-center bg-transparent">
                  <Image
                    src={shopingBag}
                    alt={category.name}
                    width={100}
                    height={100}
                    className="h-24 w-24 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-gray-800">{category.name}</span>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - Hidden on mobile, now with z-index */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none px-4 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full  text-orange-500 border border-orange-500 hover:bg-orange-600 transition-colors shadow-lg pointer-events-auto"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous category"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg pointer-events-auto"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next category"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
