import Image from "next/image";
import img1 from "@/assets/aboutus1.png";
import {
  Search,
  Ticket,
  Clock,
  Gift,
  Shield,
  Package,
  DollarSign,
  Users,
  ShoppingCart,
  Smartphone,
  ChevronLeft,
} from "lucide-react";
import img2 from "@/assets/search.png";
import img3 from "@/assets/about-2.png";
import img4 from "@/assets/about-3.png";
import img5 from "@/assets/about-4.png";

export default function page() {
  return (
    <div className="container mx-auto  pb-4 md:pb-20">
      <div className="">
        {/* Header */}
        <header className="p-6 flex items-center justify-start  gap-2">
          <span className="block md:hidden text-black -ml-4">
            <ChevronLeft className="w-5 h-5" />
          </span>
          <h1 className="text-sm md:text-3xl  font-bold text-gray-800">
            About Us
          </h1>
        </header>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 px-2">
          <div className="bg-white rounded-3xl overflow-hidden max-w-full">
            <Image
              src={img1}
              alt="image"
              layout="responsive"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="">
            <div className="space-y-6 p-4 pt-0 md:pt-8">
              <div>
                <h2 className="text-lg md:text-3xl font-bold text-[#000000] mb-4">
                  Welcome to Tomboly
                </h2>
                <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                  At Tomboly, we're changing the way you shop — by adding a
                  spark of excitement to every purchase opportunity.
                </p>
              </div>

              <p className="text-gray-700   text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                Instead of just buying things the usual way, you use coins to
                enter raffles for awesome products — from home appliances to
                gadgets and everything in between. Each raffle has a limited
                number of spots, and when it closes, a winner is chosen randomly
                and fairly. If that lucky winner is you? Congratulations — that
                dream item is yours!
              </p>

              <p className="text-gray-700 leading-relaxed text-xs md:text-lg">
                But even if you don't win this time, it's never a loss — your
                coins roll over or can be used for another raffle. So you're
                always just a few coins away from your next shot at something
                big.
              </p>
            </div>
          </div>
        </div>

        {/* gradint button section  Section */}
        <div className="mt-4 md:mt-18 px-2">
          <div className="bg-gradient-to-r from-[#37B9FF] to-[#027BBD]  rounded-2xl p-8 text-center text-white">
            <h3 className="text-lg md:text-3xl font-bold mb-2">
              How Tomboly Works
            </h3>
            <p className="text-xs md:text-lg opacity-90">
              It all starts with Coins
            </p>
          </div>
        </div>
        {/* Browse & Choose section start here  */}
        <div>
          <section className="py-2 md:py-8 px-4 mt-5 md:mt-6">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Browse & Choose */}

                <div className=" gap-4 bg-white p-4 py-6  md:py-10 rounded-2xl">
                  <div className=" flex">
                    {/* <search className="w-6 h-6 text-purple-600" /> */}
                    <Image src={img2} alt="" className="mr-2 h-8 w-8" />
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                      Browse & Choose
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                    Scroll through a curated selection of exciting products —
                    the kind you'd actually love to win.
                  </p>
                </div>

                {/* Enter the Raffle */}

                <div className=" gap-4 bg-white p-4 py-6  md:py-10 rounded-2xl">
                  <div className=" flex">
                    {/* <search className="w-6 h-6 text-purple-600" /> */}
                    <Image src={img3} alt="" className="mr-2 h-8 w-8" />
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                      Enter the Raffle
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                    Use your Tomboly coins to claim entries into raffles. The
                    more entries, the better your chances — but even one ticket
                    could change everything.
                  </p>
                </div>

                {/* Wait for the Draw */}

                <div className=" gap-4 bg-white p-4 py-6  md:py-10 rounded-2xl">
                  <div className=" flex">
                    {/* <search className="w-6 h-6 text-purple-600" /> */}
                    <Image src={img4} alt="" className="mr-2 h-8 w-8" />
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                      Wait for the Draw
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                    Use your coins to buy real, useful products — not just
                    digital items. We’re talking gadgets, lifestyle accessories,
                    home goods, and more. If it’s in our store, your coins can
                    buy it.
                  </p>
                </div>

                {/* Win or Try Again */}

                <div className=" gap-4 bg-[#FFFFFF] p-4 py-6  md:py-10 rounded-2xl">
                  <div className=" flex">
                    {/* <search className="w-6 h-6 text-purple-600" /> */}
                    <Image src={img5} alt="" className="mr-2 h-8 w-8" />
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                      Win or Try Again
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                    If you win, the product is shipped straight to your door.
                    If not, don’t worry — your coins aren’t wasted. They either
                    roll over or can be reused in another raffle of your choice.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Browse & Choose section end here  */}
        {/* What Makes Tomboly Special? section start here  */}
        <div className="mt-0 lg:mt-6 px-4">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What Makes Tomboly Special */}
              <div className="mr-8 lg:mr-24 ">
                <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-2">
                  What Makes Tomboly Special?
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs md:text-lg font-bold text-[#000000] mb-2 ">
                      Fair, Transparent Draws
                    </h3>
                    <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                      Every raffle winner is selected using a verified random
                      system. No tricks, no bias, just real odds and real wins.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2 ">
                      Real Products
                    </h3>
                    <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                      These aren't just digital prizes. You're competing for
                      high-quality, desirable items everything from kitchen
                      appliances to headphones, smartwatches, and more.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2 ">
                      Coins That Keep Their Value
                    </h3>
                    <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                      Your coins go further. If you don't win, you're not left
                      empty-handed — you can keep playing without constantly
                      repurchasing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2 ">
                      Fun Meets Function
                    </h3>
                    <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                      Tomboly is built for thrill-seekers, deal-hunters, and
                      everyone who loves a good surprise wrapped in a great
                      product.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why We Built Tomboly & Join Experience */}
              <div>
                <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-4">
                  Why We Built Tomboly
                </h2>
                <ul className="text-gray-700 text-xs md:text-lg space-y-2 mb-8 leading-[180%] md:leading-relaxed font-normal">
                  <li>
                    • We believe shopping can be more than just scrolling,
                    clicking, and paying. It should feel exciting — like a game
                    where every move could lead to a win.
                  </li>
                  <li>
                    • Tomboly is for people who enjoy the rush of a raffle, the
                    joy of scoring something cool, and the confidence that it's
                    all being run fairly.
                  </li>
                  <li>
                    • Whether you win it or just enjoy the next round knowing
                    that next round have item, Tomboly gives you more than ways
                    to win — and nothing to lose.
                  </li>
                </ul>

                <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-4">
                  Join the Tomboly Experience
                </h2>
                <p className="text-gray-700 text-xs md:text-lg mb-4 leading-[180%] md:leading-relaxed font-normal">
                  We're a team of dreamers, builders, gamers, and shoppers who
                  got tired of the same old online experience. So we set out to
                  build something new — a space where people can play, earn, and
                  shop all in one place.
                </p>
                <p className="text-gray-700 text-xs md:text-lg mb-4 leading-[180%] md:leading-relaxed font-normal">
                  Tomboly is for the curious. The lucky. The strategic. The
                  everyday user who loves a good deal and a great surprise.
                </p>
                <p className="text-gray-700 text-xs md:text-lg leading-[180%] md:leading-relaxed font-normal">
                  If that sounds like you, you're already one of us.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What Makes Tomboly Special? section end here  */}
      </div>
    </div>
  );
}
