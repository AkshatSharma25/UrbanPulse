import React, { useEffect } from "react";
import { SearchProduct } from "../utils/APIroutes";
import axios from "axios";
import homeSvg from "../assets/home.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/search/searchItemSlice";
import { setText, clearText } from '../redux/search/footerLinkSlice';
import {
  startLoading,
  stopLoading,
  toggleLoading,
} from "../redux/search/loadingSlice";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);
  const loader = useSelector((state) => state.loader.isLoading);
  const items = useSelector((state) => state.items.items);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const products = await axios.get(
      `${SearchProduct}/${e.target.search.value}`
    );
    console.log(e.target.search.value)
    products.data.data.map((product) => {
      dispatch(addItem(product));
    });
    if (products.data.data.length > 0) dispatch(toggleLoading());
  };
  const handleHomeClick=()=>{
    navigate("/");
  }
  useEffect(()=>{
    const searchFromFooter=async()=>{
      if(text!==""){
        const products = await axios.get(
          `${SearchProduct}/${text}`
        );
        products.data.data.map((product) => {
          dispatch(addItem(product));
        });
        if (products.data.data.length > 0) dispatch(toggleLoading());
      }
    }
    dispatch(setText("iphone"));
    searchFromFooter();
  },[])
  return (
    <div>
      <div className="flex justify-center items-center w-full bg-blue-950">
        <button onClick={handleHomeClick} className=" bg-blue-500 flex items-center p-1 h-10 w-12 justify-center rounded-md text-white">
          <img src={homeSvg} alt="" />
        </button>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="p-3 pl-1 flex justify-center gap-1"
        >
          <input
            type="text"
            name="search"
            className="rounded-md text-white text-lg bg-blue-900 w-[35vw] h-10 text-center"
            placeholder="Search"
          />
          <button
            type="submit"
            className="flex w-10 rounded-md justify-center bg-blue-600 items-center"
          >
            {" "}
            <img src={search} alt="" />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
