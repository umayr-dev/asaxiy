"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-5">
      <div className="mx-auto max-w-[1380px] pb-6 flex justify-between border-b">
        <div className="flex flex-col gap-2 text-[16px] text-gray-600">
          <h1 className="text-black font-[600] text-[20px]">Ma'lumotlar</h1>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Ko'p so'raladigan savollar
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Yangiliklar
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Blog
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Bizning Brendlarimiz
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Asaxiydagi keryerasi
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Muddatli to'lov ofertasi
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Ommaviy Oferta
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Biz haqimizda
          </Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            Sayt Xaritasi
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[16px] text-gray-600">
          <h1 className="text-black font-[600] text-[20px]">Biz bilan aloqa</h1>
          <a
            className="flex hover:text-[#006bff] transition duration-200 items-center gap-1"
            href="tel:+998712000105"
          >
            <Image height={24} width={24} src="/phone.png" alt="phone" />
            +998 71 200 01 05
          </a>
          <a
            className="flex hover:text-[#006bff] transition duration-200 items-center gap-1"
            href="mailto:info@asaxiy.uz"
          >
            <Image height={24} width={24} src="/pochta.png" alt="email" />
            info@asaxiy.uz
          </a>
          <a
            className="flex hover:text-[#006bff] transition duration-200 items-center gap-1"
            href="https://t.me/asaxiybot"
          >
            <Image height={24} width={24} src="/telegram-logo.png" alt="telegram" />
            Telegram bot
          </a>
          <a
            className="flex hover:text-[#006bff] transition duration-200 items-center gap-1"
            href="https://www.google.com/maps/place/Tashkent+State+University+of+Economics"
          >
            <Image height={24} width={24} src="/location-plus.png" alt="location" />
            Islom Karimov, 49, Toshkent
          </a>
          <h1 className="text-black font-[600] text-[20px] mt-7">Sodiqlik dasturlari</h1>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>
            "El-yurt ishonchi" statusi
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-[16px]">
          <h1 className="text-black font-[600] text-[20px]">Yetkazib berish va do'konlar</h1>
          <Link
            className="flex items-center hover:text-[#006bff] transition duration-200 w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3"
            href={"/"}
          >
            <Image height={24} width={24} src="/store.png" alt="store" />
            <p>Bizning do'konlar</p>
            <Image height={24} width={24} src="/right.png" alt="right arrow" />
          </Link>
          <Link
            className="flex hover:text-[#006bff] transition duration-200 items-center w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3"
            href={"/"}
          >
            <Image height={24} width={24} src="/map.png" alt="map" />
            <p>Olib ketish punktlari</p>
            <Image height={24} width={24} src="/right.png" alt="right arrow" />
          </Link>
          <Link
            className="flex hover:text-[#006bff] transition duration-200 items-center w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3"
            href={"/"}
          >
            <Image height={24} width={24} src="/package.png" alt="package" />
            <p>Yetkazib berish</p>
            <Image height={24} width={24} src="/right.png" alt="right arrow" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-black font-[600] text-[20px]">To'lov turlari</h1>
          <div className="grid grid-cols-2 gap-4">
            {[
              "uzum.svg",
              "payme.svg",
              "visa.svg",
              "mastercard.svg",
              "humo.svg",
              "uzcard.svg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="w-[160px] h-[80px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center"
              >
                <Image src={`https://asaxiy.uz/custom-assets/images/${src}`} alt={src} width={40} height={0} />
              </div>
            ))}
          </div>
          <h1 className="text-black font-[600] text-[20px]">Biz ijtimoiy tarmoqlarda</h1>
          <div className="flex items-center gap-3">
            {[
              { href: "https://www.facebook.com/asaxiyshop/", src: "/facebook-circle.png" },
              { href: "https://t.me/asaxiyuz", src: "/telegram-logo.png" },
              { href: "https://www.instagram.com/asaxiyshop/", src: "/instagram.png" },
              { href: "https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ", src: "/youtube.png" },
            ].map((item, idx) => (
              <a key={idx} href={item.href}>
                <Image src={item.src} alt={item.src} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1380px] p-6 flex justify-between">
        <p className="text-gray-500">
          2015 - 2024 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar. Mahsulotni
          yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
