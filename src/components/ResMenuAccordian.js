import React, { useState } from 'react'
import { CLOUDINARY_CDN_URL } from '../utils/constants'
import { FaRegCaretSquareUp, FaStar } from 'react-icons/fa'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'

const ResMenuAccordian = ({ title, menu, amount }) => {

    const [showItems, setShowItems] = useState(true)

    const handleTitleClick = () => {
        setShowItems(!showItems)
    }

    return (
        <div className='border-b-2 border-gray-400'>
            <div onClick={handleTitleClick} className='flex justify-between items-center p-4 cursor-pointer rounded-xl hover:border-gray-600 '>
                <h1 className='text-xl font-bold '>{title} ({amount})</h1>
                {showItems? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {showItems &&<div className='menu-items-container px-4'>
                {menu.map(item => (
                    <div key={item?.card?.info?.id} className='flex items-center gap-4 pb-4 my-4 border-b justify-between'>
                        <div className='w-[70%]'>
                            <div className={`${item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "text-green-600" : "text-red-700"} text-2xl`}>
                                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? <svg className='w-6 rounded-xs' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="10" width="80" height="80" fill="transparent" stroke="green" strokeWidth="10" />
                                    <circle cx="50" cy="50" r="25" fill="green" />
                                </svg> : <FaRegCaretSquareUp />}</div>
                            <h3 className='text-xl font-semibold'>{item?.card?.info?.name}</h3>
                            <h4 className='font-semibold'>₹{(item?.card?.info?.price / 100) || (item?.card?.info?.defaultPrice / 100)}</h4>
                            {item?.card?.info?.ratings.aggregatedRating.ratingCountV2 && <p className='text-green-700 flex items-center gap-1'><FaStar /> {item?.card?.info?.ratings.aggregatedRating.rating}<span className='text-gray-400'>({item?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>}
                            <p className='text-gray-600'>{item?.card?.info?.description}</p>
                        </div>
                        <div>
                            <img className='w-36 h-36 rounded-lg bg-green-100 relative' src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId} alt={`${item?.card?.info?.name} image`} />
                            <button className='absolute py-1 px-6 mt-[-2rem] ml-8 bg-white border-2 border-orange-500 rounded-lg text-orange-500 font-bold'>Add</button>
                        </div>
                    </div>
                ))
                }
            </div>}
        </div>
    )
}


export const resMenuAccordianWithEnclosingCategory = (ResMenuAccordian) => {
    return ({title, list}) => {
        return (
            <div className=''>
                <h1 className='text-2xl font-bold mt-8'>{title}</h1>
                <div className=''>
                    {
                        list.map(item => <ResMenuAccordian key={item.categoryId} title={item?.title} amount={item?.itemCards?.length} menu={item?.itemCards} />)
                    }
                </div>
            </div>
        )
    }
}


export default ResMenuAccordian


