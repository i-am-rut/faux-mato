import ReastaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import ShimmerResCards from "./ShimmerResCards"

const Body = () => {
    const [resList, setResList] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        setResList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        
    }

    const handleTopResClick = () => {
        const filtered = resList.filter(res => res.avgRating > 4.4)
        // console.log(filtered)
        setResList(filtered)
    }

    
    return (
        <div className="body-container">
            <div className="filter-container">
                <div className="search-container">
                    <input name="search-input" type="text" />
                    <button>Search</button>
                </div>
                <button onClick={handleTopResClick} className="filter-button">Top Rated Restaurants</button>
            </div>
            <div className="res-card-container">
                {resList.length === 0 ? <ShimmerResCards /> : resList.map(res => <ReastaurantCard key={res.id} resData={res} />)
                }
            </div>
        </div>
    )
}

export default Body
