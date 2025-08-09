"use client";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
}

export default function page() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Message submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    });
    setIsSubmitting(false);
  };
  return (
    // akhane cintainer marte hbe 
     <div className="container mx-auto  ">   
      <div className=" overflow-hidden">
         {/* Header */}
        <header className="p-3 flex items-center gap-2">
          <span className="block md:hidden text-black">
            <ChevronLeft className="w-5 h-5" />
          </span>
          <h1 className="block md:hidden text-sm  font-bold text-gray-800">
           Contact
          </h1>
        </header>
        {/* Header */}
        <div className="px-3 md:px-9 pt-2 pb-4 md:pb-8">
          <h1 className="text-lg md:text-3xl font-bold text-gray-800">Contact Us</h1>
        </div>

        {/* Form Container with Gradient Background */}
        <div className="bg-gradient-to-b from-[#37B9FF] to-[#027BBD] md:bg-[linear-gradient(to_bottom,_#37B9FFB3,_#027BBDB3)] p-4 md:p-8 mx-2 md:mx-8 mb-8 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-1 md:space-y-4 px-2 md:px-8">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-white text-sm  md:text-2xl font-bold mb-1 md:mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Hazel Wise"
                className="w-full px-4 py-3 bg-white border-0 rounded-full text-xs md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-[#161616] md:placeholder-gray-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm  md:text-2xl font-bold mb-1 md:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@gmail.com"
                className="w-full px-4 py-3 bg-white border-0 rounded-full text-xs md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-[#161616] md:placeholder-gray-500"
                required
              />
            </div>

            {/* Mobile Field */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-white text-sm  md:text-2xl font-bold mb-1 md:mb-2"
              >
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+1234567890"
                className="w-full px-4 py-3 bg-white border-0 rounded-full text-xs md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-[#161616] md:placeholder-gray-500"
                required
              />
            </div>

            {/* Message Box */}
            <div>
              <label
                htmlFor="message"
                className="block text-white text-sm  md:text-2xl font-bold mb-1 md:mb-2"
              >
                Message box
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={3}
                className="w-full px-4 py-3 bg-white border-0 rounded-2xl text-xs md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-[#161616] md:placeholder-gray-500 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1 md:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-semibold text-sm px-8 py-3 rounded-full cursor-pointer 
             bg-[linear-gradient(to_right,_#37B9FFB3,_#027BBDB3)]
             shadow-[inset_6px_4px_6px_#ffffff]
             hover:bg-gray-50 
             focus:outline-none focus:ring-2 opacity-70 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 
             transition-all duration-200 
             disabled:opacity-70 disabled:cursor-not-allowed text-white hover:text-black"
              >
                {isSubmitting ? "Submitting..." : "Submit Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
