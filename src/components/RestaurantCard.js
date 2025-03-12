
import { FaStar } from "react-icons/fa"
import { CLOUDINARY_CDN_URL } from "../utils/constants"

const ReastaurantCard = ({resData}) => {
    return (
        <div className="p-2 w-64" id={resData.id}>
            <img src={CLOUDINARY_CDN_URL + resData?.cloudinaryImageId} alt="chinese wok" className="w-[100%] h-36 rounded-lg" />
            <h2 className="text-2xl font-bold my-2">{resData?.name}</h2>
            <div className="flex items-center gap-2">
                <FaStar className="w-6 h-6 p-[0.375rem] text-white bg-green-700 rounded-full" /><span className=" font-semibold">{resData?.avgRating}</span> • <span className="font-bold">{resData?.sla?.slaString}</span>
            </div>
            <p className="text-gray-500">{resData?.cuisines?.join(', ')}</p>
            <p className="text-gray-500">{resData?.costForTwo}</p>
        </div>
    )
}


export const withOpenLabel = (ReastaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute px-2 bg-green-600 text-white font-bold z-10">Open now</label>
                <ReastaurantCard {...props} />
            </div>
        )
    }
}

export const withPromotedLabel = (ReastaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute px-2 bg-green-600 text-white font-bold z-10">Promoted</label>
                <ReastaurantCard {...props} />
            </div>
        )
    }
}


export default ReastaurantCard