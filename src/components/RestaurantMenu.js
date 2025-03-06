import React from 'react'
import { useParams } from 'react-router'
import ResMenuPageResDetailsCard from './ResMenuPageResDetailsCard'
import { FaStar } from 'react-icons/fa'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ShimmerResCards from './ShimmerResCards'

const RestaurantMenu = () => {
    const { resId } = useParams()

    const restaurant = useRestaurantMenu(resId)

    console.log(restaurant)

    if(!restaurant) return <ShimmerResCards />

    return (
        <div className='res-menu-page-container'>
            {!restaurant? <ShimmerResCards /> 
            : <>
            <div className='res-menu-page-res-details-container'>
                <ResMenuPageResDetailsCard resData={restaurant[2]?.card?.card?.info} />
            </div>
            <div className='res-menu-container'>
                <h1>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</h1> 
                <div className='menu-items-container'>
                    <div className='menu-item-card'>
                        <h3>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</h3>
                        <h4>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.price/100}</h4>
                        <p><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings.aggregatedRating.rating}({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</p>
                        <p>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.description}</p>
                    </div>
                    <div className='menu-item-card'>
                        <h3>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.name}</h3>
                        <h4>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.price/100}</h4>
                        <p><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.ratings.aggregatedRating.rating}({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</p>
                        <p>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card?.info?.description}</p>
                    </div>
                    <div className='menu-item-card'>
                        <h3>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.name}</h3>
                        <h4>₹{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.price/100}</h4>
                        <p><FaStar /> {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.ratings.aggregatedRating.rating}({restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.ratings.aggregatedRating.ratingCountV2})</p>
                        <p>{restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info?.description}</p>
                    </div>
                </div>   
            </div>
        </>}
        </div>
    )
}

export default RestaurantMenu