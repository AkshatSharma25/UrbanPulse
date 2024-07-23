import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleWindow } from "../../redux/profile/windowToggleSlice";

const Window = ({windowContent}) => {
  const isOpen = useSelector((state) => state.windowToggle.isOpen);
const dispatch = useDispatch();
    const closeWindow=()=>{
        dispatch(toggleWindow());
        console.log()
    }
  return (
    <div className={`${isOpen?"hidden":""} ease-in duration-500 flex justify-center items-center bg-[#000000bf] backdrop-blur w-[100vw] h-[100vh] absolute z-10`}>
        
    <div className='blur-overlay absolute z-20 h-[50vh] w-[50vw] bg-green-300 '>
    <div onClick={()=>closeWindow()} className='bg-red-200 h-8 m-2 rounded-md flex items-center justify-center w-16 cursor-pointer'>
            Back
        </div>
      {windowContent}
    </div>
    
    </div>
  )
}

export default Window
