import React from "react";
const ProductCard = ({ category, name, price, imageUrl }) => {
  return (
    <div className="p-2 m-3 rounded-lg bg-gray-200">
      <a
        href="#"
        className="w-full block relative h-80 rounded overflow-hidden "
      >
        <img
          alt="ecommerce"
          className="object-cover object-top w-full h-full block"
          src={imageUrl}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
