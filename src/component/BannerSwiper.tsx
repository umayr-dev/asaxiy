"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { BannerSwipers } from "@/interface";
import Link from "next/link";
const BannerSwiper = () => {
  const [isBrand, setIsBrand] = useState<BannerSwipers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const { data } = await axios.get(
          "https://9fd0d88e6d8305b1.mokky.dev/brands"
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
    <div className="mx-auto max-w-[1380px] py-5 items-center z-0">
      <div className="flex w-[100%] items-center justify-between h-[60px]">
        <Link href={"/"} className="font-[600] cursor-pointer text-[18px]">
          Mashhur brendlar
        </Link>
        <Link href={"/"} className="text-[16px] text-blue-500">
          Barcha brendlar
        </Link>
      </div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper h-[100px]  flex items-center justify-center"
      >
        {isBrand.map((item) => (
          <SwiperSlide
            className=" bg-white flex rounded-lg  w-[185px] h-[110px] px-2 py-2 items-center justify-center z-0"
            key={item.id}
          >
            {" "}
            <img className="" width={100} height={60} src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
