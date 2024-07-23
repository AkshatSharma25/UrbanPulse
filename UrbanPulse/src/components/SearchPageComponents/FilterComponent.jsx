import React from 'react'

const FilterComponent = ({filterName}) => {
  return (
    <div>
      <div className='p-3 w-full flex gap-2 justify-center'>
        <input type="checkbox" name="apply" id="" />
        <label htmlFor="apply">{filterName}</label>

      </div>
    </div>
  )
}

export default FilterComponent
