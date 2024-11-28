'use client';

import { useCart } from "@/context/CartContext";
// import { useCart } from '../contexts/CartContext';
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  images: string;
  price: number;
  discount_price: number;
  price_per_month: number;
  months: number;
  reviews: number;
  isNew: boolean;
}

const ProductCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "https://9fd0d88e6d8305b1.mokky.dev/products"
        );
        setProducts(data);
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
    <>
      {products.map((item) => (
        <div
          key={item.id}
          className="border relative overflow-x-hidden box-border bg-white w-[265px] h-[434px] flex  flex-col rounded-2xl p-4 shadow hover:shadow-lg hover:scale-105 mb-5 transition duration-300"
        >
          <Link
            className="flex flex-col items-center"
            href={`/products/${item.id}`}
          >
            <img
              src={item.images}
              alt={item.name}
              className="w-[160px] h-40 object-cover rounded mb-4"
            />
            <div className="w-[100%] box-border flex flex-col gap-1">
              <h3 className="font-normal w-[100%] h-5 overflow-hidden text-[14px]">{item.name}</h3>
              <div className="w-[100%] h-8 flex items-center justify-between">
                <div className="flex">
                  <Image
                    src={"/star-solid-24.png"}
                    alt=""
                    width={14}
                    height={14}
                  />
                  <Image
                    src={"/star-solid-24.png"}
                    alt=""
                    width={14}
                    height={14}
                  />
                  <Image
                    src={"/star-solid-24.png"}
                    alt=""
                    width={14}
                    height={14}
                  />
                  <Image
                    src={"/star-solid-24.png"}
                    alt=""
                    width={14}
                    height={24}
                  />
                  <Image
                    src={"/star-solid-24.png"}
                    alt=""
                    width={14}
                    height={14}
                  />
                </div>
                <p className="text-[12px] text-gray-500 ">
                  {item.reviews}ta sharx
                </p>
              </div>
              <p className="text-[#006bf7] font-semibold mt-2 flex flex-col">
                <del className="text-gray-400 text-[12px]">
                  {item.price.toLocaleString()}
                </del>
                {item.discount_price.toLocaleString()} so'm
              </p>
              <div
                className=" border border-[#fe7700] p-1 flex w-[100%] h-8 rounded-md  items-center justify-start
                text-[#fe7700] font-bold gap-2"
              >
                <p>{item.price_per_month.toLocaleString()} x </p>
                <p>{item.months}</p>
              </div>
              {item.isNew ? (
                <p className="absolute top-3 text-white left-2 w-[80px] h-6 p-2 flex items-center justify-center rounded-md  bg-red-600">
                  Yangi
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </Link>
          <div className="w-[100%] pt-[20px] flex items-center justify-between">
            <button 
              className="w-[180px] h-[35px] text-white border-none rounded-lg bg-[#006bff] z-40  relative gap-2 after:w-0 after:h-10 after:absolute after:top-0 after:hover:w-[180px] after:hover:h-[35px]  transition after:duration-200 after:ease-in-out  after:rounded-lg after:left-0  after:bg-[#0d00ff]"
             
            >
              <span className="z-20 relative">Hoziroq xarid qilish</span>
            </button>
            <button  onClick={() => addToCart({ id: item.id, name: item.name, price: item.discount_price })} className="w-[40px] h-[35px] rounded-lg justify-center flex items-center bg-[#00bfaf]">
              <Image
                alt=""
                width={24}
                height={24}
                src={
                  "https://asaxiy.uz/custom-assets/images/icons/cart-single.svg"
                }
              />
            </button>
          </div>
          <div className="flex flex-col gap-2 absolute right-2 top-16">
            <Image alt="" width={24} height={24} src={"https://asaxiy.uz/custom-assets/images/icons/heart.svg"}/>
            <Image alt="" width={24} height={24} src={"https://asaxiy.uz/custom-assets/images/icons/compare_gray.svg"}/>
          </div>
          <div className="w-[90px] text-[14px]  box-border  top-[10px] right-[-25px] flex items-center justify-center rotate-45 absolute h-[25px] bg-[#3f6d5f] text-white">
              <p className="box-border">0-0-12</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;

