"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form data:", formData);
    // Handle save logic here
  };

  const handleImageChange = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
      <div className="w-full md:max-w-7xl mx-auto">
        <div className=" rounded-2xl  p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <button className="text-black text-sm font-medium flex items-center gap-1.5 cursor-pointer md:hidden mb-6">
            <IoIosArrowBack />
            <span className="font-semibold">Edit Profile</span>
          </button>

          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 hidden md:block">Informations</h1>

          {/* Profile Picture Section */}
          <h2 className="text-sm font-bold text-black mb-3 block md:hidden">Profile Image</h2>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 border-4 border-white shadow-lg">
                {profileImage ? (
                  <Image src={profileImage} alt="Profile picture preview" width={96} height={96} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {profileImage && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleImageChange}
                className="orange-Btn text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-transform duration-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Change</span>
                <MdOutlineFileUpload className="text-base sm:text-lg" />
              </button>

              {profileImage && (
                <button
                  onClick={() => setProfileImage(null)}
                  className="text-red-500 hover:text-red-600 text-xs font-medium transition-colors duration-200"
                >
                  Remove
                </button>
              )}
            </div>

            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Full Name for mobile */}
            <div className="md:hidden">
              <label htmlFor="fullName" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Hazel Wise"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full text-black px-4 py-3 border-[0.5] bg-white border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
              />
            </div>

            {/* First Name + Last Name for md+ */}
            <div className="hidden md:block">
              <label className="text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">Name</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border-[0.5] border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border-[0.5] border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                />
              </div>
            </div>

            {/* Mobile and Email Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="mobile" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                  Mobile
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="+244567890"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border-[0.5] border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border-[0.5] border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
                />
              </div>
            </div>

            {/* Address Section */}
            <div>
              <label htmlFor="address" className="block text-sm sm:text-lg font-bold sm:font-medium text-black mb-1 sm:mb-2">
                Address
              </label>
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Address Line 1"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full text-black px-4 py-3 border-[0.5] border-[#E0E0E0] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-[#161616] sm:placeholder-[#797979]"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              onClick={handleSave}
              className="blue-Btn text-white px-12 py-2 rounded-lg font-medium transition-transform duration-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
