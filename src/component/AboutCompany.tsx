"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const AboutCompany = () => {
  const [isActive, setIsActive] = useState(false)

  function handleClick(){
    setIsActive(true)
  }
  useEffect(()=>{
    handleClick();
  }, [])
  return (
    <main className="mx-auto max-w-[1380px] pt-5 pb-5">
        <div className="w-[100%] h-auto bg-white pt-10 p-8 rounded-3xl flex flex-col gap-7 ">
            <h1 className="font-[500] text-[42px] w-[100%] text-center ">Asaxiy kompaniyasi haqida</h1>
            <p className="w-[100%] text-center">Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.</p>
            <p className="w-[100%] text-center pb-5 border-b">Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>
            <h1 onClick={()=>handleClick()} className="w-[100%] font-semibold flex justify-between">Kompaniyaning ish tamoyili
              <Image className="cursor-pointer" alt="" src="/bottom.png" width={24} height={24}/>
            </h1>
              <div >
                <p className="flex-none">asaxiy</p>
              </div>
        </div>
    </main>
  )
}

export default AboutCompany