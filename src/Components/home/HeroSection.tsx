import Image from "next/image"
import { Button } from "../ui/button"
import heroImage from '../../assets/man.svg'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#36a3eb] to-[#007bff] rounded-xl overflow-hidden mx-4 md:mx-auto max-w-[1600px] mt-20 w">
      <div className="container mx-auto px-6  grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-5 text-white z-10">
          <h1 className="text-4xl font-bold leading-tight">Stay Active, Win More!</h1>
          <p className="text-base max-w-md">
            Tomboly's active users enjoy surprise bonuses, early access to offers, and more chances to win big.
          </p>
          <Button
            className="font-semibold text-base px-10 py-7 rounded-full cursor-pointer
                             bg-[linear-gradient(to_right,_#37B9FF,_#027BBD)]
                             shadow-[inset_0px_4px_6px_rgba(255,255,255,0.3)]
                             text-white transition-all duration-200
                             hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0099E6]"
          >
            Keep playing In Tomboly
          </Button>
        </div>
        <div className="relative h-[280px] md:h-[380px] flex justify-center md:justify-end">
          <Image
            src={heroImage}
            alt="Surprised man looking at phone"
            width={600}
            height={800}
            className="absolute bottom-0 right-0 object-contain h-full w-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}
