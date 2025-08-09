import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { ReactNode } from 'react';
interface MenuItem {
  title: string;
  href: string;
  icon: ReactNode;
}

interface DashboardNavbarProps {
  menuItems: MenuItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isActive: (href: string) => boolean;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ 
  menuItems, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  isActive 
}) => {
    return (
       <div className={`fixed inset-y-0 left-0 z-50 w-80 text-white bg-gradient-to-b from-[#000000] to-[#0490DC] shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex py-5 px-6 items-center justify-between ">
          <Image  src={logo} alt="Logo" />
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl text-black">✕</span>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8 px-4">
          <ul className="space-y-3">
            <li>
                <Link
                  href="/admindashboard/create-raffles"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-center  px-5 py-3 transition-colors bg-gradient-to-r from-[#37B9FF] to-[#027BBD] text-white font-semibold rounded-full`}
                >
                  Create Raffle
                </Link>
              </li>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center  px-5 py-3  font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#0490DC33] rounded-full'
                      : ''
                  }`}
                >
                  <span className={`mr-4 text-xl ${isActive(item.href) ? 'text-[#04BDEC]' : ''}`}>{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
};

export default DashboardNavbar;