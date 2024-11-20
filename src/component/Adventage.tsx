import Link from "next/link"

const Adventage = () => {
  return (
    <main className="bg-[#006bf6] pt-12 pb-12 ">
    <div className="mx-auto max-w-[1380px] bg-white rounded-[12px] p-[20px] h-[140px] flex justify-between items-center">
        <div className="flex items-center gap-5 ">
            <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
            <h1 className="flex flex-col w-[225px] ">
                <p className="text-[15px] font-[600] text-blue-950">Bozorga borishga hojat yo'q</p>
                <span className="text-[14px] text-gray-500">Bizda qulay narxlar va uyga yetkazib berish mavjud</span>
            </h1>
        </div>
        <div className="flex items-center gap-5 ">
            <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
            <p className="flex flex-col w-[300px] ">
                <Link href={"/"} className="text-[15px] font-[600] text-blue-950">Tez yetkazib berish</Link>
                <span className="text-[14px] text-gray-500">Bizda qulay narxlar va uyga yetkazib berish mavjud</span>
            </p>
        </div>
        <div className="flex items-center gap-5 ">
            <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
            <p className="flex flex-col w-[300px] ">
                <Link href={"/"} className="text-[15px] font-[600] text-blue-950">Tez yetkazib berish</Link>
                <span className="text-[14px] text-gray-500">Bizda qulay narxlar va uyga yetkazib berish mavjud</span>
            </p>
        </div>
        <div className="flex items-center gap-5 ">
            <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
            <p className="flex flex-col w-[300px] ">
                <Link href={"/"} className="text-[15px] font-[600] text-blue-950">Tez yetkazib berish</Link>
                <span className="text-[14px] text-gray-500">Bizda qulay narxlar va uyga yetkazib berish mavjud</span>
            </p>
        </div>
    </div>
    </main>
  )
}

export default Adventage