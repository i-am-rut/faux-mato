
import { FaStar } from "react-icons/fa"
import { CLOUDINARY_CDN_URL } from "../utils/constants"

const ReastaurantCard = ({resData}) => {
    return (
        <div className="res-card" id={resData.id}>
            <img src={CLOUDINARY_CDN_URL + resData?.cloudinaryImageId} alt="chinese wok" className="res-card-logo" />
            <h2>{resData?.name}</h2>
            <div className="res-card-rating-and-time-container">
                <FaStar /><span className="res-card-rating">{resData?.avgRating}</span> • <span className="res-card-time">{resData?.sla?.slaString}</span>
            </div>
            <p className="res-card-cuisines">{resData?.cuisines?.join(', ')}</p>
            <p className="res-card-price-for-two">{resData?.costForTwo}</p>

        </div>
    )
}

export default ReastaurantCard