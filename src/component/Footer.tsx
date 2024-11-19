import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-5">
      <div className="mx-auto max-w-[1380px] pb-6 flex justify-between border-b">
        <div className="flex flex-col gap-2 text-[16px] text-gray-600">
          <h1 className="text-black font-[600] text-[20px]">Ma'lumotlar</h1>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Ko'p so'raladigan savollar</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Yangiliklar</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Blog</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Bizning Brendlarimiz</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Asaxiydagi keryerasi</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Muddatli to'lov ofertasi</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Ommaviy Oferta</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Biz haqimizda</Link>
          <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>Sayt Xaritasi</Link>
        </div>
        <div className="flex flex-col gap-2 text-[16px] text-gray-600">
        <h1 className="text-black font-[600] text-[20px]">Biz bilan aloqa</h1>
        <a className="flex hover:text-[#006bff] transition duration-200 items-center gap-1" href="+998 71 200 01 05"><img src="/phone.png" alt="" />+998 71 200 01 05</a>
        <a className="flex hover:text-[#006bff] transition duration-200 items-center gap-1" href="info@asaxiy.uz"><img src="/pochta.png" alt="" />info@asaxiy.uz</a>
        <a className="flex hover:text-[#006bff] transition duration-200 items-center gap-1" href="https://t.me/asaxiybot"><img src="/telegram-logo.png" alt="" />Telegram bot</a>
        <a className="flex hover:text-[#006bff] transition duration-200 items-center gap-1" href="https://www.google.com/maps/place/Tashkent+State+University+of+Economics/@41.3108037,69.2304245,15z/data=!4m7!3m6!1s0x38ae8b05774c5969:0xd6f6eef4c05c280!8m2!3d41.3108047!4d69.2494792!15sCgZuYXJ4b3paCCIGbmFyeG96kgEKdW5pdmVyc2l0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VONWIwdElTalIzUlJBQuABAA!16s%2Fm%2F0415l82?entry=tts&g_ep=EgoyMDI0MDUyNy4yKgBIAVAD"><img src="/location-plus.png" alt="" />Islom Karimov, 49, Toshkent</a>
        <h1 className="text-black font-[600] text-[20px] mt-7">Sodiqlik dasturlari</h1>
        <Link className="hover:text-[#006bff] transition duration-200" href={"/"}>"El-yurt ishonchi" statusi</Link>
        </div>
        <div className="flex flex-col gap-4 text-[16px]">
        <h1 className="text-black font-[600] text-[20px]">Yetkazib berish va do'konlar</h1>
          <Link className="flex items-center hover:text-[#006bff] transition duration-200 w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3 " href={"/"}>
            <img src="store.png" alt="" />
            <p>Bizning do'konlar</p>
            <img src="right.png" alt="" />
          </Link>
          <Link className="flex hover:text-[#006bff] transition duration-200 items-center w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3 " href={"/"}>
            <img src="map.png" alt="" />
            <p>Olib ketish punktlari</p>
            <img src="right.png" alt="" />
          </Link>
          <Link className="flex hover:text-[#006bff] transition duration-200 items-center w-[240px] justify-between rounded-[8px] bg-[#f4f7fd] h-16 p-3 " href={"/"}>
            <img src="package.png" alt="" />
            <p>Yetkazib berish</p>
            <img src="right.png" alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-black font-[600] text-[20px]">To'lov turlari</h1>
          <div className="grid grid-cols-2 gap-5">
            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="" />
            </p>

            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="" />
            </p>

            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="" />
            </p>

            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="" />
            </p>

            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="" />
            </p>

            <p className="w-[160px] h-[60px] rounded-[8px] p-[12px] bg-[#f4f7fb] flex justify-center items-center">
              <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="" />
            </p>
          </div>
          <h1 className="text-black font-[600] text-[20px]">Biz ijtimoiy tarmoqlarda</h1>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/asaxiyshop/">
              <img src="facebook-circle.png" alt="" />
            </a>
            <a href="https://t.me/asaxiyuz">
              <img src="telegram-logo.png" alt="" />
            </a>
            <a href="https://www.instagram.com/asaxiyshop/">
              <img src="instagram.png" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UC0UaPm4AlSkAU7U88H8jhhQ">
              <img src="youtube.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="mx-auto max-w-[1380px] p-6 flex justify-between">
        <p className="text-gray-500">2015 - 2024 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer