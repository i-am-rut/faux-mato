
import { FaStar } from "react-icons/fa"
import { CLOUDINARY_CDN_URL } from "../utils/constants"

const ReastaurantCard = ({resData}) => {
    return (
        <div className="res-card" id={resData.info.id}>
            <img src={CLOUDINARY_CDN_URL + resData?.info?.cloudinaryImageId} alt="chinese wok" className="res-card-logo" />
            <h2>{resData?.info?.name}</h2>
            <div className="res-card-rating-and-time-container">
                <FaStar /><span className="res-card-rating">{resData?.info?.avgRating}</span> • <span className="res-card-time">{resData?.info?.sla?.slaString}</span>
            </div>
            <p className="res-card-cuisines">{resData?.info?.cuisines?.join(', ')}</p>
            <p className="res-card-price-for-two">{resData?.info?.costForTwo}</p>

        </div>
    )
}

export default ReastaurantCard