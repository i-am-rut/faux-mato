import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ReastaurantCard, { withOpenLabel } from './RestaurantCard'

const PageBottomComponent = ({ title, data}) => {
    const [resList, setResList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const RestaurantCardWithOpen = withOpenLabel(ReastaurantCard)

    useEffect(() => {
        if(data) {
            setResList(data?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredList(data?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
    }, [])

    const handleTopResClick = () => {
        const filtered = resList.filter(res => res.info.avgRating > 4.4)
        setFilteredList(filtered)
    }


  return (
    <div className="my-8 mx-2">
        <div className="max-w-6xl min-w-80">
            <h1 className="text-3xl font-bold pb-4">{title?.card?.card?.title}</h1>
            <div className=" py-4 max-w-6xl">
                <button onClick={handleTopResClick} className="px-2 py-1 bg-gray-200 rounded-3xl cursor-pointer">Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap gap-4 pb-4 ">
                {!filteredList ?  <h1 className="text-xl font-bold">No results matching applied filters.</h1> : filteredList.map(res => <Link to={"restaurant/" + res.info.id} key={res.info.id} className="relative">
                {res.isOpen ? <RestaurantCardWithOpen resData={res.info} /> :
                    <ReastaurantCard  resData={res.info} />
                }</Link>)
                }
            </div>
        </div>
    </div>
  )
}

export default PageBottomComponent
