"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { BannerSwipers } from "@/interface";
import {Navigation } from 'swiper/modules';
const Banner = () => {
    const [isBrand, setIsBrand] = useState<BannerSwipers[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const getBanner = async () => {
        try {
          const { data } = await axios.get(
            "https://9fd0d88e6d8305b1.mokky.dev/banners"
          );
          setIsBrand(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getBanner();
    }, []);
    return (
      <div className="mx-auto max-w-[1380px] py-10 items-center z-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
        pagination={{
          clickable: true,
        }}
          modules={[FreeMode, Navigation ]}
          className=""
        >
          {isBrand.map((item) => (
            <SwiperSlide
              className=""
              key={item.id}
            >
              
              <img className="rounded-xl"  src={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

export default Banner