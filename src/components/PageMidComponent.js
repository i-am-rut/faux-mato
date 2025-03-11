import React, { useEffect, useState } from 'react'
import ReastaurantCard, { withOpenLabel } from "./RestaurantCard"
import { Link } from 'react-router'
import ShimmerResCard from './ShimmerResCard'

const PageMidComponent = ({data}) => {
    const [resList, setResList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const RestaurantCardWithOpen = withOpenLabel(ReastaurantCard)

    // console.log(data)
    useEffect(() => {
        if(data) {
            setResList(data?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
            setFilteredList(data?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        }
    }, [])

    const handleTopResClick = () => {
        const filtered = filteredList.filter(res => res.avgRating > 4.4)
        setFilteredList(filtered)
    }

  return (
    <div className="my-8 mx-2">
        <div className="max-w-6xl min-w-80">
            <h1 className="text-3xl font-bold pt-4">{data?.card?.card?.header?.title}</h1>
            <div className=" py-2 max-w-6xl">
                <button onClick={handleTopResClick} className="px-2 py-1 bg-gray-200 rounded-3xl cursor-pointer">Top Rated Restaurants</button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-4 border-b-2  scrollbar">
                {resList.length === 0 ? <ShimmerResCard /> : filteredList.length === 0? <h1 className="text-xl font-bold">No results matching applied filters.</h1> : filteredList.map(res => <Link to={"restaurant/" + res.id} key={res.id} className="relative">
                {res.isOpen ? <RestaurantCardWithOpen resData={res} /> :
                    <ReastaurantCard  resData={res} />
                }</Link>)
                }
            </div>
        </div>
    </div>
  )
}

export default PageMidComponent
