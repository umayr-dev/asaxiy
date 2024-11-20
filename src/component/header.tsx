"use client"
import { CategoriesType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';
const Header = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoriesType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect (()=> {
    const getData = async () => {
      try {
        const {data} = await axios.get(
          'https://9fd0d88e6d8305b1.mokky.dev/categories'
        );
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally{
        setIsLoading(false);
      }
    }
    getData()
  }, [])

  return (
    <div className=" bg-white sticky top-0 left-0 right-0 bottom-0">

    <header className=" border-[1px]">
      <div className="mx-auto max-w-[1380px] h-[80px] header-top items-center flex   justify-between ">
              <Image className='w-32 h-9' height={36} width={128}   src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg" alt="" />
              <div className="w-32 h-9 relative gap-2 after:w-0 after:h-10 after:absolute after:top-0 after:hover:w-32 after:hover:h-10 after:opacity-100 after:transition-all after:rounded-lg after:left-0 after:bg-[#0d00ff] after:z-10 flex items-center justify-center rounded-lg bg-[#006bff]">
                <Image className="z-20" width={24} height={24} src="/menu.png" alt="" />
                <p className="text-white z-20">Bolimlar</p>
              </div>
              <div className="w-[480px] h-9 flex pl-2 items-center border-2 rounded-lg justify-between border-[#006bff]">
                <input className="outline-none w-3/4" type="text" placeholder="Qidirish"  />
                <button className="w-[80px] text-white h-9 rounded-tr-lg rounded-br-lg bg-[#006bff]">Qidirish</button>
              </div>
              <p onClick={()=> router.push("/")} className="flex cursor-pointer text-[14px] flex-col
              items-center hover:text-[#006bff] transition-all">
                <Image height={24} width={24} src="https://asaxiy.uz/custom-assets/images/icons/header/compare_header.svg" alt="" />
                Taqqoslash
              </p>
              <p className="flex flex-col cursor-pointer text-[14px] hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4" src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg" alt="" />
                To'lov
              </p>
              <p className="flex flex-col text-[14px] cursor-pointer hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4"  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg" alt="" />
                Trek
              </p>
              <p className="flex flex-col text-[14px] cursor-pointer hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4"  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
                Savatcha
              </p>
              <p className="flex flex-col text-[14px] cursor-pointer hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4"  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
                Sevimlilar
              </p>
              <p className="flex flex-col text-[14px] cursor-pointer hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4"  src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg" alt="" />
                Русский
              </p>
              <p className="flex flex-col text-[14px] cursor-pointer hover:text-[#006bff] transition-all
              items-center">
                <Image height={24} width={24} className="w-5 h-4"  src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg" alt="" />
                Kirish
              </p>
      </div>
    </header>
    <header className="mx-auto max-w-[1380px] flex justify-between h-12 items-center">  
      {
        categories.map((item) => (
          <Link className="hover:text-[#006bff] transition duration-200" key={item.id} href={"/categories"}>{item.name}</Link>
        ))
      }
    </header>
    </div>


  )
}

export default Header