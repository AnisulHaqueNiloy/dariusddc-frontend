'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { EyeOff, Trash2 } from 'lucide-react';
import userImg from "@/assets/userImg.jpg"
import RegisteredUsers from './RegisteredUsers';

const users = [
  {
    image: userImg,
    name: 'Guy Hawkins',
    email: 'georgia.young@example.com',
    joined: '15/08/2017',
    totalEntry: 345,
  },
  {
    image: userImg,
    name: 'Floyd Miles',
    email: 'debbie.baker@example.com',
    joined: '12/06/2020',
    totalEntry: 323,
  },
  {
    image: userImg,
    name: 'Ronald Richards',
    email: 'nathan.roberts@example.com',
    joined: '07/05/2016',
    totalEntry: 243,
  },
  {
    image: userImg,
    name: 'Dianne Russell',
    email: 'michelle.rivera@example.com',
    joined: '16/08/2013',
    totalEntry: 123,
  },
  {
    image: userImg,
    name: 'Jacob Jones',
    email: 'willie.jennings@example.com',
    joined: '28/10/2012',
    totalEntry: 176,
  },
  {
    image: userImg,
    name: 'Cameron Williamson',
    email: 'dolores.chambers@example.com',
    joined: '18/09/2016',
    totalEntry: 197,
  },
  {
    image: userImg,
    name: 'Guy Hawkins',
    email: 'georgia.young@example.com',
    joined: '15/08/2017',
    totalEntry: 345,
  },
  {
    image: userImg,
    name: 'Floyd Miles',
    email: 'debbie.baker@example.com',
    joined: '12/06/2020',
    totalEntry: 323,
  },
  {
    image: userImg,
    name: 'Ronald Richards',
    email: 'nathan.roberts@example.com',
    joined: '07/05/2016',
    totalEntry: 243,
  },
  {
    image: userImg,
    name: 'Dianne Russell',
    email: 'michelle.rivera@example.com',
    joined: '16/08/2013',
    totalEntry: 123,
  },
  {
    image: userImg,
    name: 'Jacob Jones',
    email: 'willie.jennings@example.com',
    joined: '28/10/2012',
    totalEntry: 176,
  },
  {
    image: userImg,
    name: 'Cameron Williamson',
    email: 'dolores.chambers@example.com',
    joined: '18/09/2016',
    totalEntry: 197,
  },
  {
    image: userImg,
    name: 'Guy Hawkins',
    email: 'georgia.young@example.com',
    joined: '15/08/2017',
    totalEntry: 345,
  },
  {
    image: userImg,
    name: 'Floyd Miles',
    email: 'debbie.baker@example.com',
    joined: '12/06/2020',
    totalEntry: 323,
  },
  {
    image: userImg,
    name: 'Ronald Richards',
    email: 'nathan.roberts@example.com',
    joined: '07/05/2016',
    totalEntry: 243,
  },
  {
    image: userImg,
    name: 'Dianne Russell',
    email: 'michelle.rivera@example.com',
    joined: '16/08/2013',
    totalEntry: 123,
  },
  {
    image: userImg,
    name: 'Jacob Jones',
    email: 'willie.jennings@example.com',
    joined: '28/10/2012',
    totalEntry: 176,
  },
  {
    image: userImg,
    name: 'Cameron Williamson',
    email: 'dolores.chambers@example.com',
    joined: '18/09/2016',
    totalEntry: 197,
  },
];


const USERS_PER_PAGE = 5;

const Users = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIdx = (page - 1) * USERS_PER_PAGE;
  const endIdx = startIdx + USERS_PER_PAGE;
  const paginatedUsers = users.slice(startIdx, endIdx);

  return (
    <div className=" p-6 mb-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold text-black">User Activity</h2>
        
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-black text-base font-semibold">
              <th className="py-2 px-2 font-semibold">Image</th>
              <th className="py-2 px-2 font-semibold">Users</th>
              <th className="py-2 px-2 font-semibold">Email</th>
              <th className="py-2 px-2 font-semibold">Joined</th>
              <th className="py-2 px-2 font-semibold">Total Entry</th>
              <th className="py-2 px-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.email} className="">
                <td className="py-3 px-2">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden">
                    <Image src={user.image} alt={user.name} width={60} height={60} className="object-cover w-full h-full" />
                  </div>
                </td>
                <td className="py-2 px-2 text-black font-medium">{user.name}</td>
                <td className="py-2 px-2 text-gray-700">{user.email}</td>
                <td className="py-2 px-2 text-gray-700">{user.joined}</td>
                <td className="py-2 px-2 text-black font-semibold">{user.totalEntry}</td>
                <td className="py-2 px-2">
                  <div className="flex gap-2">
                    <button className="bg-[#f5f7fa] hover:bg-[#e2e8f0] p-2 rounded-full border border-gray-200 text-[#ff6b6b] transition" title="Hide">
                      <EyeOff size={18} />
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
        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-gray-700 text-sm">
          <div>
            Showing {startIdx + 1}-{Math.min(endIdx, users.length)} of {users.length} Activities
          </div>
          <div className="flex items-center gap-2 select-none">
            <button
              className={`px-2 py-1 rounded ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-blue-100'}`}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              &lt; Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold ${page === i + 1 ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-2 py-1 rounded ${page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-blue-100'}`}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;