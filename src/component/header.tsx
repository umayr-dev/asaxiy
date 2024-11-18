const Header = () => {
  return (
    <div>

    <header className=" border-[1px]">
      <div className="mx-auto max-w-[1380px] h-[80px] header-top items-center flex   justify-between ">
              <img className='w-32 h-9' src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg" alt="" />
              <div className="w-32 h-9 relative gap-2 after:w-0 after:h-10 after:absolute after:top-0 after:hover:w-32 after:hover:h-10 after:opacity-100 after:transition-all after:rounded-lg after:left-0 after:bg-[#0d00ff] after:z-10 flex items-center justify-center rounded-lg bg-[#006bff]">
                <img className="z-20" src="/menu.png" alt="" />
                <p className="text-white z-20">Bo'limlar</p>
              </div>
              <div className="w-[420px] h-9 flex pl-2 items-center border-2 rounded-lg justify-between border-[#006bff]">
                <input className="outline-none w-3/4" type="text" placeholder="Qidirish"  />
                <button className="w-[80px] text-white h-9 rounded-tr-lg rounded-br-lg bg-[#006bff]">Qidirish</button>
              </div>
              <p  className="flex flex-col
              items-center hover:text-[#006bff] transition-all">
                <img src="https://asaxiy.uz/custom-assets/images/icons/header/compare_header.svg" alt="" />
                Taqqoslash
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5" src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg" alt="" />
                To'lov
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5"  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg" alt="" />
                Trek
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5"  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
                Savatcha
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5"  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
                Sevimlilar
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5"  src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg" alt="" />
                Русский
              </p>
              <p className="flex flex-col hover:text-[#006bff] transition-all
              items-center">
                <img className="w-6 h-5"  src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg" alt="" />
                Kirish
              </p>
      </div>
    </header>
    <header>

    </header>
    </div>


  )
}

export default Header