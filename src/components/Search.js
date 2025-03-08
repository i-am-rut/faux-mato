import React, { useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { CLOUDINARY_CDN_URL, SWIGGY_SEARCH_SUGGESTIONS } from '../utils/constants'
import SearchSuggestionCard from './SearchSuggestionCard'

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleCrossClick = () => {
    if(searchText !== "") {
      setSearchText("")
    }
  }

  useEffect(() => {
    const timer = setTimeout(fetchSuggestions, 350)

    return () => clearTimeout(timer)
  }, [searchText])

  const fetchSuggestions = async() => {
    try {
      if(searchText.length > 1) {
        const data = await fetch(SWIGGY_SEARCH_SUGGESTIONS + searchText)
      const json = await data.json()
      setSuggestions(json?.data?.suggestions)
      }
    } catch (err) {
      console.log(err)
    }

  }

  console.log(suggestions)


  return (
    <div className='my-8 mx-2'>
        <div className='flex'>
          <input 
            type='text'
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder='Search for restaurants and food' className='px-4 py-2 font-bold border border-gray-500 border-r-0  max-w-5xl w-3xl focus:border-r-0' />
          <button onClick={handleCrossClick} className='px-4 py-2 border border-l-0 focus:border-l-0'>{searchText === "" ? <IoSearch /> : <RxCross1 />}</button>
        </div>
        {showSuggestions && <div className='flex flex-col w-[51rem] border border-gray-400 p-4'>
          {suggestions.map(suggestion => <SearchSuggestionCard suggestion={suggestion} />)}
        </div>}
      
    </div>
  )
}

export default Search