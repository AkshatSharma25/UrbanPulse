import React from "react";
import location from "../../assets/location.svg";
import accountImage from "../../assets/account.svg";
import shoppingBag from "../../assets/bag.svg";
import logout from "../../assets/logout.svg";
import edit from "../../assets/edit.svg";
import compass from "../../assets/compass.svg";
import search from "../../assets/search.svg";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";
import piggyBank from "../../assets/piggy_bank.svg";
const LeftSection = ({ username, email, address }) => {
  const navitage=useNavigate();
  const time = new Date();

  return (
    <div>
      <div className="p-4 gap-2 w-[25vw] text-2xl flex items-center justify-center">
        {`${time.getHours()}:${time.getMinutes()}, ${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`}
      </div>
      <div className="m-4 bg-gray-50 w-[25vw] rounded-xl shadow-sm h-[85vh]">
        <div>
          <div className="flex p-3 items-center  rounded-xl shadow-md mb-6 ">
            <img
              src={accountImage}
              className="rounded-[50%] bg-black"
              width={80}
              alt=""
            />
            <div className="flex flex-col ml-5">
              <div className="text-3xl">{username}</div>
              <div>{email}</div>
            </div>
          </div>
        </div>

        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={edit} className="invert" alt="" />
          Change Profile Picture
        </div>
        <div onClick={()=>navitage('/')} className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={home} className="invert" alt="" />
          Home
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={compass} className="invert" alt="" />
          Track Your Orders
        </div>
        <div onClick={()=>navitage('/search')} className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={search} className="invert" alt="" />
          Search Products
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={location} className="invert" alt="" />
          Delivery Address
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={shoppingBag} className="invert" alt="" />
          My Orders
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={piggyBank} className="invert" alt="" />
          My Credits
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={logout} className="invert" alt="" />
          Log Out
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
