import React from 'react';
import ProductCard from './ProductCard';
import AliceCarousel from "react-alice-carousel";
import {products} from "./items"
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};
const ProductSectionCarousel = () => {
  
  const items=products.map((product) => (
    <ProductCard key={product.id} category={product.category} name={product.name} price ={product.price} imageUrl={product.imageUrl} />

))
  return (
    <div className="pt-6 lg:pl-16 text-gray-600 body-font w-full">
      <div className="container">
        <div className="">
        <AliceCarousel
        disableDotsControls
        mouseTracking
            items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
        </div>
      </div>
    </div>
  );
}

export default ProductSectionCarousel;
