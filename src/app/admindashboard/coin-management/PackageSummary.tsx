"use client";
import { DeleteIcon, EditIcon } from "@/Components/Icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PackageSummary() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const packages = [
    {
      id: 1,
      coinVolume: 800,
      priceAmount: 15,
      extraBonus: 20,
      createdAt: "12-09-2025",
    },
    {
      id: 2,
      coinVolume: 700,
      priceAmount: 15,
      extraBonus: 18,
      createdAt: "16-09-2025",
    },
    {
      id: 3,
      coinVolume: 600,
      priceAmount: 15,
      extraBonus: 17,
      createdAt: "06-09-2025",
    },
    {
      id: 4,
      coinVolume: 500,
      priceAmount: 15,
      extraBonus: 15,
      createdAt: "27-09-2025",
    },
    {
      id: 5,
      coinVolume: 200,
      priceAmount: 15,
      extraBonus: 12,
      createdAt: "04-09-2025",
    },
    {
      id: 6,
      coinVolume: 100,
      priceAmount: 15,
      extraBonus: 5,
      createdAt: "20-09-2025",
    },
  ];

  const handleEdit = (id: number) => {
    console.log("Edit package:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete package:", id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-transparent mt-10">
      {/* Header and View All Button */}
      <div className="flex justify-between items-center">
        <h1 className="text-[#1a1a1a] text-2xl font-bold">Package Summary</h1>
        <button
          type="button"
          className="bg-gradient-to-r from-[#37B9FF] to-[#027BBD] hover:opacity-90 cursor-pointer text-white font-medium py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Veiw All
        </button>
      </div>
      {/* Table Container */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-black">
                Coin Volume
              </th>
              <th className="text-left py-4 px-4 font-semibold text-black">
                Price Amount
              </th>
              <th className="text-left py-4 px-4 font-semibold text-black">
                Extra Bonus
              </th>
              <th className="text-left py-4 px-4 font-semibold text-black">
                Created at
              </th>
              <th className="text-right py-4 px-4 font-semibold text-black">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr
                key={pkg.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4 text-gray-900">{pkg.coinVolume}</td>
                <td className="py-4 px-4 text-gray-900">${pkg.priceAmount}</td>
                <td className="py-4 px-4 text-gray-900">{pkg.extraBonus}%</td>
                <td className="py-4 px-4 text-gray-900">{pkg.createdAt}</td>
                <td className="py-4 px-4 text-right">
                  <div className="flex justify-end items-center gap-2">
                    <button
                      onClick={() => handleEdit(pkg.id)}
                      className="p-2 cursor-pointer rounded-full text-blue-500 hover:bg-blue-200 bg-blue-100 transition-colors"
                      aria-label="Edit package"
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => handleDelete(pkg.id)}
                      className="p-2 cursor-pointer rounded-full text-red-500 hover:bg-red-200 bg-red-100 transition-colors"
                      aria-label="Delete package"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with Pagination */}
      <div className="flex items-center justify-between py-4 px-4 border-t border-gray-200">
        <div className="text-base text-black">Showing 1-5 of 5 Activities</div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex cursor-pointer items-center gap-1 px-3 py-2 text-base text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 cursor-pointer rounded-full  text-sm font-medium transition-colors ${
                  currentPage === page
                    ? "bg-[#3CCCEC] text-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-gray-400">...</span>
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex cursor-pointer items-center gap-1 px-3 py-2 text-base text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
