"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import coin from "@/assets/checkout/coin.png";
import Image from "next/image";
import { paypal, stripe, visa } from "@/Components/Icons";
import { IoIosArrowBack } from "react-icons/io";

interface Product {
  id: string;
  name: string;
  coins: number;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
}

interface OrderSummary {
  amount: number;
  vatTax: number;
  discount: number;
  total: number;
}

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState<"paypal" | "stripe">("paypal");
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
    email: "",
  });

  // Sample product data - can be replaced with API data
  const product: Product = {
    id: "1",
    name: "1200 Coins",
    coins: 1200,
    originalPrice: 13.33,
    discountedPrice: 10.0,
    discount: 25,
  };

  // Order summary - can be calculated from API
  const orderSummary: OrderSummary = {
    amount: 10.0,
    vatTax: 0.0,
    discount: 0.0,
    total: 10.0,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentSelect = (method: "paypal" | "stripe") => {
    setSelectedPayment(method);
  };

  const handlePurchase = async () => {
    const purchaseData = {
      product,
      paymentMethod: selectedPayment,
      formData,
      orderSummary,
    };

    console.log("Purchase data:", purchaseData);
    // API integration point
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData((prev) => ({
      ...prev,
      cardNumber: formatted,
    }));
  };

  return (
    <div className="min-h-screen  p-3 sm:p-6">
      <div className="max-w-[100%] xl:max-w-[80%] mx-auto px-2 sm:px-6 pt-12">
        {/* Header */}
        <h1 className="text-2xl font-stretch-50% text-[#2C2C2C] font-extrabold mb-5 hidden md:block">
          Checkout
        </h1>
        <button className="text-black text-sm font-medium flex items-center gap-1.5 cursor-pointer md:hidden mb-6">
          <IoIosArrowBack />
          <span className="font-semibold">Checkout</span>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1">
            {/* Product Card */}
            <div className="relative bg-[linear-gradient(180deg,#37B9FF_0%,#027BBD_100%)] rounded-[28px] p-6 mb-6">
              {/* Discount Badge */}
              <div className="absolute top-0 left-0 orange-Btn rounded-tl-[28px] rounded-br-[28px] rounded-tr-none text-white px-6 py-2 text-sm font-bold">
                25% OFF
              </div>

              {/* Coin Stack Image */}
              <div className="flex items-center justify-center">
                <Image src={coin} alt="Coin Img" width={100} height={100} />
              </div>

              {/* Product Title */}
              <div className="text-center text-white my-6">
                <h3 className="text-xl font-bold">1200 Coins</h3>
              </div>

              {/* Price Button */}
              <button
                className="w-full orange-Btn rounded-full text-white py-3 font-bold text-lg"
                onClick={() => console.log("Product clicked")}
              >
                $10.00
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-[28px] p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="text-gray-900">10.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VAT & TAX</span>
                  <span className="text-gray-900">0.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-gray-900">- 0.00 USD</span>
                </div>
                <div className="w-full border border-dashed" />
                <div className="flex text-black justify-between font-bold text-base">
                  <span>Total Amount</span>
                  <span>$10.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Payment Form */}
          <div className="flex-1">
            <div className="bg-white rounded-[28px] p-3 sm:p-6">
              {/* Frame Header */}
              <h1 className="text-2xl font-bold text-black mb-3">Payment</h1>
              <div className="bg-[linear-gradient(180deg,#37B9FF_0%,#027BBD_100%)] rounded-[28px] p-3 sm:p-5">
                {/* Select Card */}
                <div className="mb-4 rounded-full">
                  <h3 className="text-black font-bold mb-3">Select Card</h3>
                  <div className="bg-white rounded-full p-3 mb-4">
                    <div className="flex items-center gap-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="paypal"
                          checked={selectedPayment === "paypal"}
                          onChange={() => handlePaymentSelect("paypal")}
                          className="mr-2 w-4 h-4 text-blue-600"
                        />
                        <span className="font-bold">{paypal}</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          value="stripe"
                          checked={selectedPayment === "stripe"}
                          onChange={() => handlePaymentSelect("stripe")}
                          className="mr-2 w-4 h-4 text-purple-600"
                        />
                        <span className="text-purple-600 font-bold">{stripe}</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-3">
                  {/* Name on Card */}
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-full bg-white placeholder-[#949494] border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                  />

                  {/* Card Number */}
                  <div className="relative">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                      className="w-full px-4 py-3 rounded-full bg-white placeholder-[#949494] border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-blue-600 font-bold text-sm">{visa}</span>
                    </div>
                  </div>

                  {/* Expire Date and CVV */}
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        name="expireDate"
                        placeholder="Expire Date"
                        value={formData.expireDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full bg-white placeholder-[#949494] border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength={4}
                      className="w-20 px-4 py-3 rounded-full bg-white placeholder-[#949494] border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                    />
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-full bg-white placeholder-[#949494] border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 text-black"
                  />
                </div>
              </div>
              {/* Confirm Purchase Button */}
              <button
                onClick={handlePurchase}
                className="blue-Btn text-white rounded-full px-8 py-3 font-medium mt-6"
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
