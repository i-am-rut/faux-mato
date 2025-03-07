import React from 'react'
import { useParams } from 'react-router'
import ResMenuPageResDetailsCard from './ResMenuPageResDetailsCard'
import { FaStar, FaRegCaretSquareUp } from 'react-icons/fa'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ShimmerResCards from './ShimmerResCard'
import { CiForkAndKnife } from 'react-icons/ci'
import { CLOUDINARY_CDN_URL } from '../utils/constants'

const RestaurantMenu = () => {
    const { resId } = useParams()

    const restaurant = useRestaurantMenu(resId)

    console.log(restaurant)

    if(!restaurant) return <ShimmerResCards />

    return (
        <div className='my-8 mx-2 max-w-5xl min-w-80'>
            {!restaurant? <ShimmerResCards /> 
            : <>
            <div className='mb-12'>
                <ResMenuPageResDetailsCard resData={restaurant[2]?.card?.card?.info} />
            </div>
            <div className='mb-8 text-center flex justify-center items-center'>
                <CiForkAndKnife className='mr-4 font-bold' />
                M E N U
                <CiForkAndKnife className='ml-4 font-bold' />
            </div>
            <div className='res-menu-container px-4'>
                <h1 className='text-2xl font-bold mb-4'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title} ({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.length})</h1> 
                <div className='menu-items-container'>
                    <div className='flex items-center gap-4 pb-4 my-4 border-b'>
                        <div>
                            <div className={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG"? "text-green-600" : "text-red-700"} text-2xl`}>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? <FaStar /> : <FaRegCaretSquareUp />}</div>
                            <h3 className='text-xl font-semibold'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</h3>
                            <h4 className='font-semibold'>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.price/100}</h4>
                            <p className='text-green-700 flex items-center gap-1'><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings.aggregatedRating.rating}<span className='text-gray-400'>({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>
                            <p className='text-gray-600'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.description}</p>
                        </div>
                        <img className='w-36 h-36 rounded-lg bg-green-100' src={CLOUDINARY_CDN_URL + restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.imageId} alt={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name} image`} />
                    </div>
                    <div className='flex items-center pb-4 my-4 border-b'>
                        <div>
                            <div className={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG"? "text-green-600" : "text-red-700"} text-2xl`}>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? <FaStar /> : <FaRegCaretSquareUp />}</div>
                            <h3 className='text-xl font-semibold'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.name}</h3>
                            <h4 className='font-semibold'>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.price/100}</h4>
                            <p className='text-green-700 flex items-center gap-1'><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.ratings.aggregatedRating.rating}<span className='text-gray-400'>({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>
                            <p className='text-gray-600'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.description}</p>
                        </div>
                        <img className='w-36 h-36 rounded-lg bg-green-100' src={CLOUDINARY_CDN_URL + restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.imageId} alt={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.name} image`} />
                    </div>
                    <div className='flex items-center pb-4 my-4 border-b justify-between'>
                        <div>
                            <div className={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG"? "text-green-600" : "text-red-700"} text-2xl`}>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? <FaStar /> : <FaRegCaretSquareUp />}</div>
                            <h3 className='text-xl font-semibold'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.name}</h3>
                            <h4 className='font-semibold'>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.price/100}</h4>
                            <p className='text-green-700 flex items-center gap-1'><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.ratings.aggregatedRating.rating}<span className='text-gray-400'>({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>
                            <p className='text-gray-600'>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.description}</p>
                        </div>
                        <img className='w-36 h-36 rounded-lg bg-green-100' src={CLOUDINARY_CDN_URL + restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.imageId} alt={`${restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.name} image`} />
                    </div>
                </div>   
            </div>
        </>}
        </div>
    )
}

export default RestaurantMenu

