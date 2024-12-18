import React from 'react'
import rightArrow from "../../assets/rigth_arrow.svg"
import ProductSectionCarousel from '../ProductCarousel/ProductCarousel'
const RightSection = () => {
  return (
    <div className='relative'>
      
      <div className='m-4 w-[70vw] h-[95vh] flex justify-center items-center flex-col rounded-lg shadow-md p-6 bg-gray-100 overflow-auto'>
        <div className='text-3xl flex gap-2'>
          CheckOut What's Treding Today...
        </div>
        <div className='flex'>
          <img src="https://i.pinimg.com/736x/1a/e3/dc/1ae3dceefe9bced52e0718945fef7f7b.jpg" className='h-[80vh]' alt="" />
          <img src="https://i.pinimg.com/736x/88/7a/1d/887a1db8f8dc11b56cb6a0f01c7f93cd.jpg" className='h-[80vh]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightSection
