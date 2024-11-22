import AboutCompany from "@/component/AboutCompany";
import Banner from "@/component/Banner";
import BannerSwiper from "@/component/BannerSwiper";
import Product from "@/component/Product";
import SiteApp from "@/component/SiteApp";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1">
      <Banner/>
      <Product/>
      <SiteApp />
      <BannerSwiper />
      <AboutCompany />
    </div>
  );
}

export default HomePage;
