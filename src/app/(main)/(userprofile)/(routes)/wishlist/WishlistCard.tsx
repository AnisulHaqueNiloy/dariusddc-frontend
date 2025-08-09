"use client";
import ProductCard from "@/Components/shared/ProductCard";

import laptop from "@/assets/laptop.png";
import watch from "@/assets/watch.png";
import { IProduct } from "@/types/product.type";

import React from "react";
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
  {
    id: 5,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 6,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
  {
    id: 7,
    name: "MacBook Air 256gb",
    image: laptop,
    rating: 105,
    isFavorited: false,
    category: "laptop",
  },
  {
    id: 8,
    name: "MacBook Air 256gb",
    image: watch,
    rating: 105,
    isFavorited: false,
    category: "watch",
  },
];
const WishlistCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default WishlistCard;
