import React from 'react'
import { FaStar } from 'react-icons/fa'
import { CLOUDINARY_CDN_URL } from '../utils/constants'

const ResMenuPageResDetailsCard = ({resData}) => {
    const {name, cuisines, avgRating, totalRatingsString, costForTwoMessage, areaName, sla, cloudinaryImageId} = resData
  return (
    <>
      <h1 className='text-4xl font-bold mb-6 mt-16'>{name}</h1>
      <div className='px-4 pb-4 bg-gradient-to-t from-gray-400 to-gray-100- rounded-2xl'>
        <div className=' p-4 bg-white rounded-2xl flex justify-between items-center'>
          <div>
            <p className='flex items-center gap-2 font-bold mb-2'><FaStar className="w-6 h-6 p-[0.375rem] text-white bg-green-700 rounded-full" /> {avgRating} ({totalRatingsString}) • {costForTwoMessage}</p>
            <p className='text-orange-500 font-bold mb-2'>{cuisines.join(", ")}</p>
            <p className='font-black mb-2'>Outlet: <span className='font-normal'>{areaName}</span></p>
            <p className='font-bold'>{sla.slaString}</p>
          </div>
          <img className='w-48 h-36 rounded-lg' src={CLOUDINARY_CDN_URL + cloudinaryImageId} alt={name + " " + "logo"} />
        </div>
      </div>
    </>
  )
}

export default ResMenuPageResDetailsCard
