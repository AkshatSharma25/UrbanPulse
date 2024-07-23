import React from 'react'
import rightArrow from "../../assets/rigth_arrow.svg"
import ProductSectionCarousel from '../ProductCarousel/ProductCarousel'
const RightSection = () => {
  return (
    <div className='relative'>
      <div className='m-4 w-[70vw] h-[95vh] rounded-lg shadow-md p-6 bg-gray-100 overflow-auto'>
        <div className='text-3xl flex gap-2'>
            CheckOut What's Treding Today...
        </div>
        <ProductSectionCarousel title={"clothing"}  black={true} />
        <ProductSectionCarousel title={"electronics"}  black={true}/>
        <ProductSectionCarousel title={"travel & lifestyle"} black={true} />
      </div>
    </div>
  )
}

export default RightSection
