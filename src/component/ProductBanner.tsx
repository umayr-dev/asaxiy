"use client"
import { BannerSwipers } from "@/interface";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { FreeMode } from "swiper/modules";
import {Navigation } from 'swiper/modules';
const ProductBanner = () => {
    const [isProduct, setIsProduct] = useState<BannerSwipers[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getProduct = async () => {
          try {
            const { data } = await axios.get(
              "https://9fd0d88e6d8305b1.mokky.dev/products"
            );
            setIsProduct(data);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        };
        getProduct();
      }, []);
  return (
    <div className="mx-auto max-w-[1380px] my-10 rounded-xl bg-[#006bff]  py-5 px-1 ">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          freeMode={true}
        pagination={{
          clickable: true,
        }}
          modules={[FreeMode, Navigation ]}
          className=""
        >
          {isProduct.map((item) => (

            <SwiperSlide
              className=""
              key={item.id}
            >
              <div className="w-[190px] flex flex-col items-center justify-between gap-2 h-[300px] rounded-xl bg-white py-3 px-2">
              <img className=" w-[120px] h-[123px]"  src={item.images} />
              <div>

            <h2 className="text-[14px] h-10 overflow-hidden">{item.name}</h2>
            <del className="text-[14px] text-gray-500">{item.price.toLocaleString()} so'm</del>
            <p className="text-[16px] text-[#006bff]">{item.discount_price.toLocaleString()} so'm</p>
            <button className="w-[100%] h-[35px] bg-[#006bff] rounded-lg text-white">Yangi</button>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default ProductBanner