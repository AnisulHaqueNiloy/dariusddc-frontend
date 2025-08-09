"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import laptop from "@/assets/laptop.png";
import watch from "@/assets/watch.png";

import { IProduct } from "@/types/product.type";
import ProductCard from "./shared/ProductCard";

const products: IProduct[] = [
  {
    id: 1,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 2,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 3,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 4,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
];

export default function MoreSimilarRaffelList() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className=" bg-gray-100 py-8">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-18">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className=" text-xl md:text-3xl font-bold text-gray-900">
            More Similar Raffel
          </h1>
          <div className="flex items-center space-x-3  text-xl  md:text-2xl underline  font-normal md:font-bold text-gray-900">
            See All
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-2 mb-8">
          {currentProducts.map((product) => (
            <ProductCard
              toggleFavorite={toggleFavorite}
              product={product}
              key={product.id}
            />
          ))}
        </div>

        {/* Bottom border line */}
        <div className="border-b-4 border-cyan-400 w-full rounded-full"></div>
      </div>
    </div>
  );
}
