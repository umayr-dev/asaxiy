const Header = () => {
  return (
    <header className=" border-[1px]">
      <div className="mx-auto max-w-screen-xl h-16 header-top items-center flex   justify-between ">
              <img className='w-36 h-10' src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg" alt="" />
              <div className="w-36 h-10 relative gap-2 after:w-0 after:h-10 after:absolute after:top-0 after:hover:w-36 after:hover:h-10 after:opacity-100 after:transition-all after:rounded-lg after:left-0 after:bg-[#0d00ff] after:z-10 flex items-center justify-center rounded-lg bg-[#006bff]">
                <img className="z-20" src="/menu.png" alt="" />
                <p className="text-white z-20">Bo'limlar</p>
              </div>
              <div className="w-[420px] h-10 flex pl-2 items-center border-2 rounded-lg justify-between border-[#006bff]">
                <input className="outline-none w-3/4" type="text" placeholder="Qidirish"  />
                <button className="w-[80px] text-white h-10 rounded-tr-lg rounded-br-lg bg-[#006bff]">Qidirish</button>
              </div>
               
      </div>
    </header>

  )
}

export default Header