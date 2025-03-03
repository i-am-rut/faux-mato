import ReastaurantCard from "./RestaurantCard"
import resData from "../mockData"

const Body = () => {

    const handleCardClick = (e) => {
        console.log(e.target.id)
    }

    return (
        <div className="body-container">
            <div className="search-container">
                <input type="text" />
                <button>Search</button>
            </div>
            <div onClick={(e) => handleCardClick(e)} className="res-card-container">
                {resData.map(res => <ReastaurantCard key={res.info.id} resData={res} />)}
            </div>
        </div>
    )
}

export default Body