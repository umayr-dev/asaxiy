"use client";
import { BannerSwipers } from "@/interface";
import axios from "axios";
import Image from "next/image";
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
    <div className="mx-auto max-w-[1380px] grid grid-cols-5 py-10">
      {isProduct.map((item) => (
        <div
          key={item.id}
          className="border bg-white w-[265px] h-[434px] flex  flex-col rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition duration-300"
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
            <div className="w-[100%] flex flex-col gap-2">
              <h3 className="font-normal text-[14px]">{item.name}</h3>
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
                <p className="text-[12px] text-gray-500 ">{item.reviews} sharx</p>
              </div>
              <p className="text-[#006bf7] font-semibold mt-2">
                {item.discount_price.toLocaleString()} so'm
              </p>
              <div className=" border border-[#fe7700] p-1 flex w-[100%] h-8 rounded-md  items-center justify-start
               text-[#fe7700] font-bold gap-2">
                <p>{item.price_per_month.toLocaleString()} x </p>
                <p>{item.months}</p>
              </div>
            </div>
          </Link>
          <div className="w-[100%] pt-[20px] flex items-center justify-between">
            <button className="w-[180px] h-[35px] text-white border-none rounded-lg bg-[#006bff] z-40  relative gap-2 after:w-0 after:h-10 after:absolute after:top-0 after:hover:w-[180px] after:hover:h-[35px]  after:transition-all transition after:duration-200 after:ease-in-out  after:rounded-lg after:left-0 after:opacity-20 after:bg-[#0d00ff] after:z-10">Hoziroq xarid qilish</button>
            <button className="w-[40px] h-[35px] rounded-lg justify-center flex items-center bg-[#00bfaf]">
              <Image alt="" width={24} height={24} src={"https://asaxiy.uz/custom-assets/images/icons/cart-single.svg"}/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
