import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard"; 
const RightSection = () => {
  const dispatch = useDispatch();
  const loader=useSelector((state)=>state.loader.isLoading);
  const items = useSelector((state) => state.items.items);
  let content;
  // console.log(loader);
  if(loader==0){
    content=<div className="flex justify-center items-center w-full">{"Search Anything"}</div>
  }
  else{
  content=items.map((item) => {
    return (
      <div
        key={item._id}
        onClick={() => dispatch(addItem(item))}
        className="p-2 m-1 rounded-lg"
      >
        <div className="w-[400px]">
        <ProductCard
          key={item.id}
          id={item._id}
          category={item.category}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrls[0]}
        />
        </div>
      </div>
    );
  })}
  return (
    <div className="bg-[#4535C1] pl-6 pt-4 h-full w-full flex flex-wrap overflow-auto">
      {content}
    </div>
  );
};

export default RightSection;
