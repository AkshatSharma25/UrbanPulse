import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { GetProductByCategory } from "../../utils/APIroutes";
import RightArrow from "../../assets/rigth_arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const ProductSectionCarousel = (props) => {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${GetProductByCategory}/${props.title}`
        );
        setproducts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const items = products.map((product) => (
    <ProductCard
      key={product.id}
      id={product._id}
      category={product.category}
      name={product.name}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  ));
  return (
    <div className={`pt-6 lg:pl-16 text-gray-600 body-font w-full ${props.black?"text-black":""}`}>
      <div className="container">
        <div className={`text-white text-2xl ${props.black?"text-black":""} flex gap-2 items-center`}>
          {props.title.toUpperCase()}
          <img src={RightArrow} alt="" />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="">
            <AliceCarousel
              disableDotsControls
              mouseTracking
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSectionCarousel;
