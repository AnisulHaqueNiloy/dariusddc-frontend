'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardNavbar from '@/Components/DashboardNavbar';
import { HiComputerDesktop, HiMiniUsers } from 'react-icons/hi2';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BiSolidCoinStack } from 'react-icons/bi';


import { ReactNode } from 'react';

interface MenuItem {
  title: string;
  href: string;
  icon: ReactNode;
}

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      href: '/admindashboard/dashboard',
      icon: <HiComputerDesktop />
    },
    {
      title: 'Raffles',
      href: '/admindashboard/raffles',
      icon: <FaMoneyBillWave />
    },
    {
      title: 'Coin Management',
      href: '/admindashboard/coin-management',
      icon: <BiSolidCoinStack />
    },
    {
      title: 'User Management',
      href: '/admindashboard/user',
      icon: <HiMiniUsers />
    }
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Fixed Left Sidebar */}
      <DashboardNavbar menuItems={menuItems} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} isActive={isActive} />

      {/* Main Content Area */}
      <div className="lg:pl-80">
        {/* Top Header Bar for mobile */}
        <header className="bg-transparent lg:hidden">
          <div className="flex h-16 items-center px-4">
            <button
              className="p-2 rounded-md mr-3"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open sidebar menu"
            >
              <span className="text-2xl text-black">☰</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="">
          <div className="mx-auto text-black">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;