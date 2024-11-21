"use client";
import Image from "next/image";
import { useState } from "react";
import CompanyType from "./CompanyType";

const AboutCompany = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleBlock = (index) => {
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
        "Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha chegirmalarni va bir qator shaharlarga tezkor yetkazib berishni taklif etmoqdamiz. Bizning xizmat ko‘rsatish hududimizga Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston Respublikasidagi shaharlar kiradi. Bu hali biz tovar yetkazib berayotgan hududlarning to‘liq xaritasi emas. Bizning yetkazib berish hududlarimiz bilan batafsil tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq qilishingiz mumkin, u sizni qiziqtiruvchi barcha ma’lumotlarni taqdim etadi Do‘konimizning har bir xaridori – hurmatli mehmonimizdir, unga biz yoqimli chegirmalar va bonus dasturlarini taklif etamiz Biz mijoz talablariga mos tovarlarni tanlash jarayonida unga to‘liq hamrohlik qilamiz va istalgan qulay usul bilan yetkazib berishni amalga oshiramiz.",
    },
  ];
  return (
    <main className="mx-auto max-w-[1380px] pt-5 pb-5">
      <div className="w-[100%] h-auto bg-white pt-10 p-8 rounded-3xl flex flex-col gap-7 ">
        <h1 className="font-[600] text-[32px] w-[100%] text-center ">
          Asaxiy kompaniyasi haqida
        </h1>
        <p className="w-[100%] text-[14px] text-center">
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </p>
        <p className="w-[100%] text-center text-[14px] pb-5 border-b">
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </p>
        <div className="">
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleBlock(index)}
                className="flex justify-between  w-[100%] h-auto  text-left text-lg transition duration-300 font-medium text-gray-800"
              >
                <h1 className="font-[700] text-[16px] w-[100%]">
                  {item.title}
                </h1>
                <span className="text-xl">
                  {openIndex === index ? (
                    <Image alt="image" width={24} height={24} src="/top.png" />
                  ) : (
                    <Image
                      alt="image"
                      width={24}
                      height={24}
                      src={"/bottom.png"}
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
          <h1 className="font-[600] text-[14px] w-[100%]">
            "Asaxiy Books" MCHJ{" "}
          </h1>
          <h1 className="font-[600] text-[14px] w-[100%]">
            Ro'yxatdan o'tish raqami: 646439
          </h1>
          <h1 className="font-[600] text-[14px] w-[100%]">INN: 305829008</h1>
          <h1 className="font-[600] text-[14px] w-[100%]">
            MCHJ rahbari: Allayev Firuz Abdunasimovich
          </h1>
        </div>
      </div>
    </main>
  );
};

export default AboutCompany;
