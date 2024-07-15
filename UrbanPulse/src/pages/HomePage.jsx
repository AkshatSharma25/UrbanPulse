import React from "react";
import {Categories} from "../utils/CategoryList";
import Footer from "../components/Footer";
import { MainCarousel } from "../components/MainCarousel/MainCarousel";
import ProductSectionCarousel from "../components/ProductCarousel/ProductCarousel";
const HomePage = () => {
  const Catelogue=Categories.slice(0,4);
  // Categories=Categories.slice(0,4);
  // console.log(Categories)
  return (
    <div>
      <div className="bg-[#17153B]"></div>
      <MainCarousel />
      
      <div className="h-4"></div>
      <div>
        {Catelogue.map((category) => {
          return (
            <div key={category.id}>
          <ProductSectionCarousel title={category.title}/>
        </div>
          )
        })}
      </div>
      {/* <div className="bg-[#2E236C]">
        <ProductSectionCarousel title={"electronics"}/>
      </div>
      <div className="bg-[#433D8B]">
        <ProductSectionCarousel title={"Electronics"}/>
      </div>
      <div className="bg-[#3FA2F6]">
        <ProductSectionCarousel title={"Electronics"}/>
      </div>
      <div className="bg-[#C8ACD6]">
        <ProductSectionCarousel title={"Electronics"} />
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
