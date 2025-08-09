

import React from 'react';
import Image from 'next/image';
import { EyeOff, Edit2, Trash2 } from 'lucide-react';
import raffleImg from "@/assets/raffleImg.png"

const raffles = [
  {
    published: '80-06-2025',
    image: raffleImg,
    title: 'FryWell Pro XL',
    prize: 'Cooker',
    targetCoin: 30000,
    entries: 233,
  },
  {
    published: '10-06-2025',
    image: raffleImg,
    title: 'TimeX Pro',
    prize: 'Smartwatch',
    targetCoin: 22000,
    entries: 139,
  },
  {
    published: '23-06-2025',
    image: raffleImg,
    title: 'MacBook Air',
    prize: 'Laptop',
    targetCoin: 16000,
    entries: 423,
  },
];

const RaffleTable = () => {
  return (
    <div className=" p-6 mb-6">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-black text-base font-semibold">
              <th className="py-2 px-2 font-semibold">Published</th>
              <th className="py-2 px-2 font-semibold">Image</th>
              <th className="py-2 px-2 font-semibold">Raffle Title</th>
              <th className="py-2 px-2 font-semibold">Prize</th>
              <th className="py-2 px-2 font-semibold">Target Coin</th>
              <th className="py-2 px-2 font-semibold">Entries</th>
              <th className="py-2 px-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {raffles.map((raffle, idx) => (
              <tr key={raffle.title + idx} className="">
                <td className="py-3 px-2 text-black font-medium">{raffle.published}</td>
                <td className="py-3 px-2">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden">
                    <Image src={raffle.image} alt={raffle.title} width={60} height={60} className="object-cover w-full h-full" />
                  </div>
                </td>
                <td className="py-2 px-2 text-black font-medium">{raffle.title}</td>
                <td className="py-2 px-2 text-gray-700">{raffle.prize}</td>
                <td className="py-2 px-2 text-black font-semibold">{raffle.targetCoin.toLocaleString()}</td>
                <td className="py-2 px-2 text-black font-semibold">{raffle.entries}</td>
                <td className="py-2 px-2">
                  <div className="flex gap-2">
                    <button className="bg-[#f5f7fa] hover:bg-[#e2e8f0] p-2 rounded-full border border-gray-200 text-orange-400 transition" title="Hide">
                      <EyeOff size={18} />
                    </button>
                    <button className="bg-[#f5f7fa] hover:bg-[#e2e8f0] p-2 rounded-full border border-gray-200 text-sky-500 transition" title="Edit">
                      <Edit2 size={18} />
                    </button>
                    <button className="bg-[#f5f7fa] hover:bg-[#e2e8f0] p-2 rounded-full border border-gray-200 text-[#ff6b6b] transition" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RaffleTable;