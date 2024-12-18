import React from "react";
import {Categories} from "../utils/CategoryList";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/Navbar";
import { MainCarousel } from "../components/MainCarousel/MainCarousel";

import ProductSectionCarousel from "../components/ProductCarousel/ProductCarousel";
const HomePage = () => {
  const Catelogue=Categories.slice(0,3);
  return (
    <div>
      <NavBar />
      <div className="bg-[#17153B]"></div>
      <MainCarousel />
      
      <div className="h-4"></div>
      <div>
        {Catelogue.map((category) => {
          return (
            <div key={category.id}>
              <ProductSectionCarousel title={category.title} />
        </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
