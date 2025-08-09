// components/CategoryMenu.jsx
import Link from "next/link";

const categories = [
  { title: "Care & Cosmetics", url: "#" },
  { title: "Fashion", url: "#" },
  { title: "Gaming", url: "#" },
  { title: "Grocer's", url: "#" },
  { title: "Home Appliances", url: "#" },
  { title: "Home, Garden & DIY", url: "#" },
  { title: "Laptops, Tablets & Phones", url: "#" },
  { title: "Vehicles", url: "#" },
  { title: "Music & Entertainment", url: "#" },
  { title: "Sports & Travel", url: "#" },
  { title: "Toys, Kids & Babies", url: "#" },
];

export default function CategoryMenu() {
  return (
    <div className="w-80 hidden md:block bg-white border-2 border-blue-200 border-t-0 rounded-lg shadow-sm p-3 min-h-screen">
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={category.url}
              className="block px-3 py-2 text-gray-800 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-200"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
