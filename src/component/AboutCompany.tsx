"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const CompanyType = dynamic(() => import("./CompanyType"), { ssr: false });

const AboutCompany = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBlock = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Kompaniyaning ish tamoyili",
      content: <CompanyType />,
    },
    {
      title: "Bizning afzalliklarimiz",
      content:
        "Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha chegirmalarni va bir qator shaharlarga tezkor yetkazib berishni taklif etmoqdamiz...",
    },
  ];

  return (
    <main className="mx-auto max-w-[1380px] pt-5 pb-5">
      <div className="w-full h-auto bg-white pt-10 p-8 rounded-3xl flex flex-col gap-7">
        <h1 className="font-semibold text-2xl text-center">
          Asaxiy kompaniyasi haqida
        </h1>
        <p className="text-base text-center">
        Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.
        </p>
        <p className="text-base text-center pb-5 border-b">
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </p>
        <div className="accordion">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleBlock(index)}
                className="flex justify-between w-full text-left text-lg transition duration-300 font-medium text-gray-800"
              >
                <h1 className="font-bold text-base">{item.title}</h1>
                <span className="text-xl">
                  {openIndex === index ? (
                    <Image
                      alt="Collapse Icon"
                      width={24}
                      height={24}
                      src="/top.png"
                    />
                  ) : (
                    <Image
                      alt="Expand Icon"
                      width={24}
                      height={24}
                      src="/bottom.png"
                    />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 transition duration-300 ease-linear text-gray-600">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1 pb-3 pt-5 border-t">
          <h1 className="font-semibold text-sm">"Asaxiy Books" MCHJ</h1>
          <h1 className="font-semibold text-sm">
            Ro'yxatdan o'tish raqami: 646439
          </h1>
          <h1 className="font-semibold text-sm">INN: 305829008</h1>
          <h1 className="font-semibold text-sm">
            MCHJ rahbari: Allayev Firuz Abdunasimovich
          </h1>
        </div>
      </div>
    </main>
  );
};

export default AboutCompany;
