import React from 'react'
import SearchBar from "../components/SearchBar";
import LeftSection from '../components/SearchPageComponents/LeftSection';
import RightSection from '../components/SearchPageComponents/RightSection';
const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <div className='flex h-[92vh]'>
      <LeftSection />
      <RightSection />
      </div>
    </div>
  )
}

export default SearchPage
