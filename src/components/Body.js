import ReastaurantCard from "./RestaurantCard"
import { useEffect, useRef, useState } from "react"
import ShimmerResCards from "./ShimmerResCards"
import { HOME_PAGE_SWIGGY_API } from "../utils/constants"
import { Link } from "react-router"

const Body = () => {
    const [resList, setResList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const search = useRef(null)


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch(HOME_PAGE_SWIGGY_API)

        const json = await data.json()
        setResList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        setFilteredList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(res => res.info))
        
    }

    const handleSearchClick = () => {
        const filtered = resList.filter(res => res.name.toLowerCase().includes(search.current.value.toLowerCase()))
        setFilteredList(filtered)
    }

    const handleTopResClick = () => {
        const filtered = filteredList.filter(res => res.avgRating > 4.4)
        setFilteredList(filtered)
    }

    
    return (
        <div className="my-8">
            <div className="filter-container">
                <div className="search-container">
                    <input 
                        ref={search} 
                        name="search-input" 
                        type="text"  
                        onKeyUp={(e => e.key === "Enter" && handleSearchClick())}
                        placeholder="Search restaurants"/>
                    <button onClick={handleSearchClick}>Search</button>
                </div>
                <button onClick={handleTopResClick} className="filter-button">Top Rated Restaurants</button>
            </div>
            <div className="res-card-container">
                {resList.length === 0 ? <ShimmerResCards /> : filteredList.length === 0? <h1>No results matching applied filters.</h1> : filteredList.map(res => <Link to={"restaurant/" + res.id} key={res.id} className="res-card-link"><ReastaurantCard  resData={res} /></Link>)
                }
            </div>
        </div>
    )
}

export default Body
