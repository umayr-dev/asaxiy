"use client";
import { BannerSwipers } from "@/interface";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [isProduct, setIsProduct] = useState<BannerSwipers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://9fd0d88e6d8305b1.mokky.dev/products"
        );
        setIsProduct(data);
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik yuz berdi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return <p className="mx-auto max-w-[1380px]">Yuklanmoqda...</p>;
  }

  return (
    <div className="mx-auto max-w-[1380px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {isProduct.map((item) => (
        <div
          key={item.id}
          className="border bg-white w-[255px] h-[434px] flex justify-center rounded-lg p-2 shadow hover:shadow-lg transition duration-300"
        >
          <Link className="flex flex-col items-center" href={`/products/${item.id}`}>
            
              <img

                src={item.images}
                alt={item.name}
                className="w-[160px] h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price} so'm</p>
            
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
