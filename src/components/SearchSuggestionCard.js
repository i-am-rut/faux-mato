import React from 'react'
import { CLOUDINARY_CDN_URL } from '../utils/constants'

const SearchSuggestionCard = ({suggestion }) => {
  return (
    <>
        <div className='flex gap-4 py-1 px-2 rounded-lg hover:bg-gray-300 cursor-pointer'>
            <img className='w-16 h-16 rounded-lg' src={CLOUDINARY_CDN_URL + suggestion.cloudinaryId} alt={`${suggestion.text} image`} />
            <div className='flex flex-col'>
            <p className='font-bold my-1'>{suggestion.text}</p>
            <p className='text-gray-400 '>{suggestion.tagToDisplay}</p>
            </div>
        </div>
    </>
  )
}

export default SearchSuggestionCard
