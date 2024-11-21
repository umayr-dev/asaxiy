import AboutCompany from "@/component/AboutCompany";
import BannerSwiper from "@/component/BannerSwiper";
import SiteApp from "@/component/SiteApp";
import React from "react";

function HomePage() {
  return (
    <div className="flex-1">
      <SiteApp />
      <BannerSwiper />
      <AboutCompany />
    </div>
  );
}

export default HomePage;
