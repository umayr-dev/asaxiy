import AboutCompany from "@/component/AboutCompany";
import Banner from "@/component/Banner";
import BannerSwiper from "@/component/BannerSwiper";
import Product from "@/component/Product";
import ProductBanner from "@/component/ProductBanner";
import SiteApp from "@/component/SiteApp";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1">
      <ProductBanner/>
      <Banner/>
      <div className="mx-auto max-w-[1380px] grid grid-cols-5  py-10">
      <Product/>
      </div>
      <SiteApp />
      <div className="mx-auto max-w-[1380px] grid grid-cols-5  py-10">
      <Product/>
      </div>
      <BannerSwiper />
      <AboutCompany />
    </div>
  );
}

export default HomePage;
