import Image from "next/image";

const SiteApp = () => {
  return (
    <div className="flex justify-center items-center px-8 py-8 gap-10">
      <div className="w-[48%] h-[270px] border-none rounded-xl bg-[#006bff] pt-4 pl-4 pr-4 flex  justify-between">
        <div className="w-[100%] flex flex-col gap-2 items-center pt-16 pl-5">
          <Image
            alt="Asaxiy logotipi"
            width={129}
            height={32}
            src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo-white.svg"
            className=""
            priority
          />
          <p className="text-white">Sizning Internet do'koniz</p>
          <div className="flex py-4 pt-5 gap-5 w-[100%] justify-items-start">
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/app-store.svg"
            />
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/google-play.svg"
            />
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/app-gallery.svg"
            />
          </div>
        </div>
        <Image
          alt="iOS uchun banner"
          width={292}
          height={218}
          src="https://asaxiy.uz/custom-assets/images/banners/ios%20banner.png"
          className=""
        />
      </div>

      <div className="w-[48%] h-[270px] border-none rounded-xl bg-[#006bff] pt-4 pl-4 pr-4 flex  justify-between">
        <div className="w-[100%] flex flex-col items-center pt-16 pl-5 gap-2">
          <Image
            alt="Asaxiy logotipi"
            width={129}
            height={32}
            src="https://asaxiy.uz/custom-assets/images/company/asaxiy-books-logo.svg"
            className=""
            priority
          />
          <p className="text-white ">Sizning onlayn kitob do'koniz</p>
          <div className="flex py-4 pt-5 gap-5 w-[100%] justify-items-start">
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/app-store.svg"
            />
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/google-play.svg"
            />
            <Image
              alt="appstore"
              width={84}
              height={26}
              src="https://asaxiy.uz/custom-assets/images/app-gallery.svg"
            />
          </div>
        </div>
        <Image
          alt="iOS uchun banner"
          width={292}
          height={218}
          src="https://asaxiy.uz/custom-assets/images/banners/ios%20banner.png"
          className=""
        />
      </div>
    </div>
  );
};

export default SiteApp;
