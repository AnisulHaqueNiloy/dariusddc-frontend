// "use client";

// import React, { useState } from "react";
// import { Mail } from "lucide-react";
// import { FaFacebookF, FaLinkedin } from "react-icons/fa";

// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import logo from "@/assets/tomboly.svg";
// import Secure from "@/assets/secure.svg";
// import Trustpilot from "@/assets/trustpilot-logo.svg";
// import Stripe from "@/assets/stripe.svg";
// import Visa from "@/assets/visa.svg";
// import Paypal from "@/assets/paypal.svg";
// import Mastercard from "@/assets/mastercard.svg";
// import Lock from "@/assets/lock.svg";
// import { IoLogoInstagram } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState("");

//   const handleNewsletterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter subscription logic here
//     console.log("Newsletter subscription:", email);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-gray-100">
//       {/* Main Footer Content */}
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-60 pt-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {/* Logo and Description */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center mb-4">
//               <Image className="" src={logo} alt="logo" />
//             </div>
//             <p className="text-black text-sm md:text-md mb-4 lg:w-100">
//               Tomboly is your go-to platform for hassle-free shopping, exciting
//               rewards, and real raffle wins. Shop smart. Win big.
//             </p>
//             <div className="flex flex-row sm:flex-row sm:items-center">
//               <div className="flex mb-2 sm:mb-0">
//                 <div className="text-black text-sm">Stay Connected:</div>
//               </div>
//               <div className="flex sm:pl-2 pt-0.5 md:pt-3">
//                 <a href="#" className="w-8 h-8 ">
//                   <FaFacebookF />
//                 </a>
//                 <a href="#" className="w-8 h-8">
//                   <IoLogoInstagram />
//                 </a>
//                 <a href="#" className="w-8 h-8">
//                   <FaXTwitter />
//                 </a>
//                 <a href="#" className="w-8 h-8">
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Company */}
//           <div className="md:pl-10 lg:pl-60 min-w-max">
//             <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Popular
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Best Deals
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Trending
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Raffle Draw
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="md:pl-10 lg:pl-40">
//             <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Category
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   About us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Help & Contact */}
//           <div className="md:pl-10 lg:pl-20">
//             <h3 className="text-gray-900 font-semibold mb-4">Help & Contact</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Terms & Conditions
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-black hover:text-gray-900 transition-colors"
//                 >
//                   Sitemap
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="md:col-span-2 lg:col-span-1">
//             <h3 className="text-gray-900 font-semibold mb-4">Newsletter</h3>
//             <form onSubmit={handleNewsletterSubmit} className="space-y-3">
//               <div className="relative">
//                 <Mail className="w-4 h-4 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
//                 <Input
//                   type="email"
//                   placeholder="Your email address..."
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10 bg-white border-gray-200 rounded-2xl md:py-6"
//                   required
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[rgba(55,185,255,1)] to-[rgba(2,123,189,1)] text-white"
//               >
//                 Subscribe Newsletter
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Security and Payment Section */}
//       <div className="">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-60 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//             {/* Security Badge */}
//             <div className="flex items-center space-x-2">
//               <Image className="" src={Lock} alt="logo" />
//               <span className="text-sm text-black">
//                 Guaranteed & Secure Checkout Powered by:
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-row items-center gap-2 md:gap-6 pt-5 pb-4">
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Secure} alt="logo" />
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Trustpilot} alt="logo" />
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Stripe} alt="logo" />
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Visa} alt="logo" />
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Paypal} alt="logo" />
//             <Image className="w-12 h-12 md:w-20 md:h-20" src={Mastercard} alt="logo" />
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="bg-gray-100 border-t-2 mx-auto px-4 sm:px-6 lg:px-60 border-gray-200">
//         <div className="max-w-7xl mx-auto py-4 pb-8">
//           <div className="text-center text-sm md:text-md text-black">
//             All rights are reserved by the company by{" "}
//             <span className="font-semibold">Bench</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/assets/tomboly.svg";
import Secure from "@/assets/secure.svg";
import Trustpilot from "@/assets/trustpilot-logo.svg";
import Stripe from "@/assets/stripe.svg";
import Visa from "@/assets/visa.svg";
import Paypal from "@/assets/paypal.svg";
import Mastercard from "@/assets/mastercard.svg";
import Lock from "@/assets/lock.svg";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-60 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image className="" src={logo} alt="logo" />
            </div>
            <p className="text-black text-sm md:text-md mb-4 lg:w-100">
              Tomboly is your go-to platform for hassle-free shopping, exciting
              rewards, and real raffle wins. Shop smart. Win big.
            </p>
            <div className="flex flex-row sm:flex-row sm:items-center">
              <div className="flex mb-2 sm:mb-0">
                <div className="text-black text-sm">Stay Connected:</div>
              </div>
              <div className="flex sm:pl-2 pt-0.5 md:pt-3">
                <a href="#" className="w-8 h-8">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-8 h-8">
                  <IoLogoInstagram />
                </a>
                <a href="#" className="w-8 h-8">
                  <FaXTwitter />
                </a>
                <a href="#" className="w-8 h-8">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile: Flex container for navigation links */}
          <div className="flex flex-row justify-between  gap-2  md:hidden">
            {/* Company */}
            <div className="min-w-[120px]">
              <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Popular
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Best Deals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Trending
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Raffle Draw
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="min-w-[120px] -ml-4">
              <h3 className="text-gray-900 font-semibold  mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Category
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <Link
                    href="/src/app/(main)/contact/page.tsx"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help & Contact */}
            <div className="min-w-[120px] ">
              <h3 className="text-gray-900 font-semibold mb-4 ">
                Help & Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black hover:text-gray-900 transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop: Original layout (hidden on mobile) */}
          {/* Company */}
          <div className="hidden md:block md:pl-10 lg:pl-60 min-w-max">
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Best Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Raffle Draw
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block md:pl-10 lg:pl-40">
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/category"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Contact */}
          <div className="hidden md:block md:pl-10 lg:pl-20">
            <h3 className="text-gray-900 font-semibold mb-4">Help & Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-gray-900 transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="w-4 h-4 text-black absolute left-3 top-1/2 transform -translate-y-1/2" />
                <Input
                  type="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white border-gray-200 rounded-2xl md:py-6"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgba(55,185,255,1)] to-[rgba(2,123,189,1)] text-white"
              >
                Subscribe Newsletter
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Security and Payment Section */}
      <div className="">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-60 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Security Badge */}
            <div className="flex items-center space-x-2">
              <Image className="" src={Lock} alt="logo" />
              <span className="text-sm text-black">
                Guaranteed & Secure Checkout Powered by:
              </span>
            </div>
          </div>
          <div className="flex flex-row flex-wrap   gap-2 pt-5 pb-4">
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Secure}
              alt="logo"
            />
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Trustpilot}
              alt="logo"
            />
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Stripe}
              alt="logo"
            />
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Visa}
              alt="logo"
            />
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Paypal}
              alt="logo"
            />
            <Image
              className="w-12 h-12 md:w-20 md:h-20"
              src={Mastercard}
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t-2 mx-auto px-4 sm:px-6 lg:px-60 border-gray-200">
        <div className="max-w-7xl mx-auto py-4 pb-8">
          <div className="text-center text-sm md:text-md text-black">
            All rights are reserved by the company by{" "}
            <span className="font-semibold">Bench</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
