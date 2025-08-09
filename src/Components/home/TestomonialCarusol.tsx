"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import { Star, Globe, Crown, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

// Dummy data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Nayeem R.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    value1: 60,
    value2: 4,
    text: "Tomboly made shopping fun again. I grabbed what I needed and scored a raffle win too — best of both worlds!",
  },
  {
    id: 2,
    name: "Victoria",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    value1: 12,
    value2: 5,
    text: "I came to shop and ended up winning a prize — Tomboly turned a regular purchase into something unforgettable...",
  },
  {
    id: 3,
    name: "Helin",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    value1: 17,
    value2: 7,
    text: "Tomboly made shopping fun again. I grabbed what I needed and scored a raffle win too — best of both worlds!",
  },
  {
    id: 4,
    name: "Jeppe",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    value1: 5,
    value2: 4,
    text: "Tomboly isn't just a shopping platform — it's a rewarding experience. I shop, earn coins, and win awesome prizes....",
  },
  {
    id: 5,
    name: "Alice",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    value1: 25,
    value2: 3,
    text: "Great platform, easy to use and fun. Highly recommend for anyone looking for a new shopping experience.",
  },
  {
    id: 6,
    name: "Bob",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    value1: 80,
    value2: 10,
    text: "Amazing prizes and a seamless experience. I've won multiple times and it's always exciting!",
  },
]

export default function TestimonialsCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null)

  return (
    <div className="w-full   ">
      <div className="">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Winner's Testimonials</h2>
          <div className="hidden md:flex items-center gap-2">
            <button

              className="rounded-full p-2 cursor-pointer hover:bg-[#FA6807]  bg-transparent group border border-[#FA6807] hover:text-white transition-colors duration-300"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-[#FA6807] group-hover:text-white transition-colors duration-300" />
            </button>
            <button

              className="rounded-full p-2 cursor-pointer hover:bg-[#FA6807]  bg-transparent group border border-[#FA6807] hover:text-white transition-colors duration-300"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-[#FA6807] group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
          <div className="md:hidden">
            <Button variant="link" className="text-orange-500 px-0">
              See All
            </Button>
          </div>
        </div>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="w-full  min-h-[250px]"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="border-0">
              <Card className="lg:h-[250px] border-0 flex flex-col justify-between">
                <CardContent className="p-4 md:p-6 border-0 rounded-2xl bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={`@${testimonial.name}`} />
                      <AvatarFallback className="">{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? "fill-cyan-500 text-cyan-500" : "fill-gray-300 text-gray-300"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Globe className="h-6 w-6 text-orange-500" />
                      <span className="font-medium text-lg text-orange-500">{testimonial.value1}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Crown className="h-6 w-6 text-orange-500" />
                      <span className="font-medium text-lg text-gray-700">{testimonial.value2}</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 line-clamp-4">{testimonial.text}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
