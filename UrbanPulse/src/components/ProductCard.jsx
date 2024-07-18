import React from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
const ProductCard = ({id, category, name, price, imageUrl}) => {
  const navigate=useNavigate();
  const handleOnClick=async()=>{
    try{
      navigate(`/products/${id}`);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div onClick={handleOnClick} className="p-2 m-3 rounded-lg bg-[#478CCF]">
      <a
        href="#"
        className="w-full block relative h-80 rounded overflow-hidden "
      >
        <img
          alt="ecommerce"
          className="scale-150 object-cover object-top w-full h-full block"
          src={imageUrl}
        />
      </a>
      <div className="mt-4 pl-2 pb-2">
        <h3 className="text-[#003C43] text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-700 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">₹ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
