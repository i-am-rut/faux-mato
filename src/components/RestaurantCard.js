
import { FaStar } from "react-icons/fa"
import { CLOUDINARY_CDN_URL } from "../utils/constants"
// text-white w-8 h-8 p-[0.4rem] bg-green-700 rounded-full
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

export default ReastaurantCard