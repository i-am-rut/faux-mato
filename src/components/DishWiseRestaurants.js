import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { RES_BY_DISH_API } from '../utils/constants'
import ReastaurantCard, { withPromotedLabel } from './RestaurantCard'
import ShimmerResCard from './ShimmerResCard.js'

const DishWiseRestaurants = () => {
    const {dishSlug} = useParams()
    const navigate = useNavigate()
    const linkSection = dishSlug.split("&")
    const slug = ["collection="+linkSection[0].split("=")[1], linkSection[2], linkSection[3]].join("&")
    const [resData, setResData] = useState(null)
    const [restaurants, setRestaurants] = useState(null)
    const RestaurantCardWithPromoted = withPromotedLabel(ReastaurantCard)
    
    useEffect(() => {
        fetchRestaurants()
    }, [])

    const fetchRestaurants = async() => {
        try{
            const data = await fetch(RES_BY_DISH_API + slug +"&sortBy=&filters=&offset=0&page_type=null")
            const json = await data.json()
            setResData(json?.data?.cards[0]?.card?.card)
            setRestaurants(json?.data?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"))

        }catch (err) {
            console.log("Fetch error:", err)
            navigate("*")
        }
    }

  return (
    <div className='my-8 mx-2'>
        <div className='w-6xl'>
            {resData && 
                <div className='max-w-6xl mt-16'>
                    <h1 className='text-3xl font-bold'>{resData.title}</h1>
                    <p className='font-bold'>{resData.description}</p>
                </div>
            }
            {restaurants ?
                <div className="flex flex-wrap gap-4 pb-4 mt-20">
                    {restaurants.map(res => <Link to={"restaurant/" + res.card.card.info.id} key={res.card.card.info.id} className="relative">
                    {res.card.card.info.promoted ? <RestaurantCardWithPromoted resData={res.card.card.info} /> :
                        <ReastaurantCard  resData={res.card.card.info} />
                    }</Link>)
                    }
                </div> :
                <div className='flex flex-wrap gap-4'>
                    <ShimmerResCard />
                </div>
            }
        </div>
    </div>
  )
}

export default DishWiseRestaurants
