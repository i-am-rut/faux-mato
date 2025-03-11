import ReastaurantCard, { withOpenLabel } from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerResCard from "./ShimmerResCard"
import { HOME_PAGE_SWIGGY_API } from "../utils/constants"
import { Link } from "react-router"

const Body = () => {
    const [pageData, setPageData] = useState([])
    const [resList, setResList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const RestaurantCardWithOpen = withOpenLabel(ReastaurantCard)


    useEffect(() => {
       fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch(HOME_PAGE_SWIGGY_API)

        const json = await data.json()
        setPageData([json?.data?.cards[0], json?.data?.cards[1], json?.data?.cards[2], json?.data?.cards[4], ])
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        console.log(pageData)
        
    }
    // console.log(resList)

    const handleTopResClick = () => {
        const filtered = filteredList.filter(res => res.avgRating > 4.4)
        setFilteredList(filtered)
    }

    
    return (
        <div className="my-8 mx-2">
            <div className=" py-4 max-w-6xl">
                <button onClick={handleTopResClick} className="px-2 py-1 bg-gray-200 rounded-3xl cursor-pointer">Top Rated Restaurants</button>
            </div>
            <div className="max-w-6xl min-w-80">
                <h1 className="text-3xl font-bold pb-4">Popular Restaurants</h1>
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

export default Body
