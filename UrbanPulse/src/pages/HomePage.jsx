import React from "react";
import Footer from "../components/Footer";
import { MainCarousel } from "../components/MainCarousel/MainCarousel";
import ProductSectionCarousel from "../components/ProductCarousel/ProductCarousel";
const HomePage = () => {
  return (
    <div>
      <div className="bg-[#17153B]"></div>
      <MainCarousel />
      <div className="h-4"></div>
      <div className="bg-[#2E236C]">
        <ProductSectionCarousel />
      </div>
      <div className="bg-[#433D8B]">
        <ProductSectionCarousel />
      </div>
      <div className="bg-[#3FA2F6]">
        <ProductSectionCarousel />
      </div>
      <div className="bg-[#C8ACD6]">
        <ProductSectionCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
