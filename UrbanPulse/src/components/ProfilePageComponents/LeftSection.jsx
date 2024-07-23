import React, { useEffect, useState } from "react";
import Window from "./Window";
import { useSelector, useDispatch } from "react-redux";
import { toggleWindow } from "../../redux/profile/windowToggleSlice";

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
const LeftSection = ({ username, email, address, profilePicture }) => {
  const [windowContent, setwindowContent] = useState();

  const isOpen = useSelector((state) => state.windowToggle.isOpen);
  const dispatch = useDispatch();

  const navitage = useNavigate();
  const time = new Date();
  useEffect(() => {
    let displayWindowContent=(
      <div><div className="flex justify-center items-center mt-32 mb-4 ml-10 mr-10">
        This is Your Profile, you can purchase new products, track your orders, change Delivery address, and checkout What is Trendy today @UrbanPulse
      </div>
      <div className="flex justify-center">
      <button onClick={()=>dispatch(toggleWindow())} className="bg-blue-400 p-2 rounded-md">
        Let's go
      </button>
      </div></div>
    )
    setwindowContent(displayWindowContent)
  }, []);

  const handleLogout = () => {
    const logout = () => {
      localStorage.removeItem("user");
      dispatch(toggleWindow());
      console.log("hello world")
      navitage("/");
    };
    let displayWindowContent = (
      <div className="flex justify-center items-center flex-col w-full h-full">
        <div className="flex justify-center text-2xl items-center w-[100%] h-[100%]">
          Are you sure you want to log out?
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-400 flex text-xl items-center justify-center p-3 h-8 m-2"
            onClick={() => logout()}
          >
            Logout
          </button>
          <button
            onClick={() => {
              dispatch(toggleWindow());
            }}
            className="bg-blue-400 flex text-xl items-center justify-center p-3 h-8 m-2"
          >
            cancel
          </button>
        </div>
      </div>
    );
    setwindowContent(displayWindowContent);
    dispatch(toggleWindow());
  };

  let content = (
    <div>
      <Window windowContent={windowContent} />
      <div className="p-4 gap-2 w-[25vw] text-2xl flex items-center justify-center">
        {`${time.getHours()}:${time.getMinutes()}, ${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`}
      </div>
      <div className="m-4 bg-gray-50 w-[25vw] rounded-xl shadow-sm h-[85vh]">
        <div>
          <div className="flex p-3 items-center  rounded-xl shadow-md mb-6 ">
            <img
              src={profilePicture}
              className="rounded-[50%] "
              width={80}
              alt="Profile Picture"
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
        <div
          onClick={() => navitage("/")}
          className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl"
        >
          <img src={home} className="invert" alt="" />
          Home
        </div>
        <div className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl">
          <img src={compass} className="invert" alt="" />
          Track Your Orders
        </div>
        <div
          onClick={() => navitage("/search")}
          className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl"
        >
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
        <div
          onClick={() => handleLogout()}
          className="p-4 gap-2 flex items-center justify-center cursor-pointer text-xl"
        >
          <img src={logout} className="invert" alt="" />
          Log Out
        </div>
      </div>
    </div>
  );

  return <div className="relative">{content}</div>;
};

export default LeftSection;
