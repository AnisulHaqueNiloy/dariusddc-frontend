"use client";
import { ChevronDown, Eye, EyeOff, Trash2, Upload } from "lucide-react";
import React, { useState } from "react";

export default function RaffleCreationForm() {
  const [raffleTitle, setRaffleTitle] = useState("Enter Product name");
  const [targetAmount, setTargetAmount] = useState("10000");
  const [description, setDescription] = useState(
    "Write Raffle description....."
  );
  const [showTitle, setShowTitle] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [isVerified, setIsVerified] = useState(true);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Mock uploaded image with actual preview
  const [uploadedImages, setUploadedImages] = useState([
    {
      id: 1,
      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTIwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjMwIiB5PSIyNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzM3NDE1MSIvPgo8Y2lyY2xlIGN4PSI0NSIgY3k9IjM1IiByPSIzIiBmaWxsPSIjNkI3Mjg1Ii8+CjxyZWN0IHg9IjM1IiB5PSI0NSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjMiIGZpbGw9IiM2QjcyODUiLz4KPHJlY3QgeD0iMzUiIHk9IjUyIiB3aWR0aD0iMzAiIGhlaWdodD0iMyIgZmlsbD0iIzZCNzI4NSIvPgo8L3N2Zz4K",
      name: "laptop.jpg",
    },
  ]);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
  ];
  const characterCount = description.length;
  const maxCharacters = 1000;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newImage = {
            id: Date.now() + Math.random(),
            src: event.target?.result as string,
            name: file.name,
          };
          setUploadedImages((prev) => [...prev, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id: number) => {
    setUploadedImages(uploadedImages.filter((img) => img.id !== id));
  };

  return (
    <div className="w-full rounded-xl mx-auto p-4 bg-white mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="space-y-6 border border-gray-200 rounded-lg p-6">
            {/* Raffle Title */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Raffle Title
              </h3>
              <div className="relative">
                <input
                  type={showTitle ? "password" : "text"}
                  value={raffleTitle}
                  onChange={(e) => setRaffleTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#D9D9D9] rounded-full  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowTitle(!showTitle)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D9D9D9] hover:text-gray-600"
                >
                  {showTitle ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Target Amount */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Target Amount
              </h3>
              <div className="relative">
                <input
                  type={showAmount ? "password" : "text"}
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#D9D9D9] rounded-full  text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowAmount(!showAmount)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D9D9D9] hover:text-gray-600"
                >
                  {showAmount ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Description
                </h3>
                <span className="text-sm text-gray-500">
                  {characterCount}/{maxCharacters}
                </span>
              </div>
              <div className="relative">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  maxLength={maxCharacters}
                  className="w-full px-4 py-3 bg-white border border-[#D9D9D9] rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Raffle Image */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Raffle image
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              You can upload multiple images of your raffle
            </p>

            {/* Upload Area */}
            <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="mx-auto mb-4 text-gray-400" size={32} />
                <p className="text-gray-600 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  Max 10mb file size, Only jpg file
                </p>
              </label>
            </div>

            {/* Uploaded Images */}
            <div className="grid grid-cols-4 gap-3">
              {uploadedImages.map((image) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeImage(image.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              {/* Empty slots */}
              {Array.from({
                length: Math.max(0, 4 - uploadedImages.length),
              }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="aspect-square bg-gray-100 rounded-lg border border-dashed border-gray-300"
                ></div>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Category :</span>
            <div className="relative">
              <button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="bg-gradient-to-r cursor-pointer from-[#37B9FF] to-[#027BBD] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors"
              >
                {selectedCategory}
                <ChevronDown size={16} />
              </button>

              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[140px]">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategoryDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Raffle ID and Verified */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              <span className="font-medium">Raffle ID:</span> RF651011
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Verified</span>
              <button
                onClick={() => setIsVerified(!isVerified)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full border  transition-colors ${
                  isVerified
                    ? "bg-[#04BDEC33] border-[#04BDEC]"
                    : "bg-gray-300 border-gray-900/25"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full  transition-transform ${
                    isVerified
                      ? "translate-x-6 bg-[#04BDEC]"
                      : "translate-x-1 bg-gray-50"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-end mt-6">
        <div className="flex items-center gap-4">
          <button className="px-8 py-2.5 cursor-pointer text-black hover:bg-gray-50 rounded-full hover:border border-black font-medium transition-all">
            View Preview
          </button>
          <button className="px-8 py-2.5 border border-black cursor-pointer rounded-full text-black hover:bg-gray-50 font-medium transition-colors">
            Cancel
          </button>
          <button className="px-8 py-3 bg-gradient-to-r cursor-pointer from-[#FC9440] to-[#E45C04] text-white rounded-full hover:opacity-90 font-medium transition-colors">
            Publish Raffle
          </button>
        </div>
      </div>
    </div>
  );
}
