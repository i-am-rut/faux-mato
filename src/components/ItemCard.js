import React from 'react'
import { addItem, removeItem } from '../utils/cartSlice'
import { CLOUDINARY_CDN_URL } from '../utils/constants'
import { FaRegCaretSquareUp, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const ItemCard = ({ item, resInfo }) => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    const handleItemAddClick = () => {
        if(cartItems.length > 0) {
            if(cartItems[0].resInfo.id === resInfo.id) {
                dispatch(addItem({ itemInfo: item?.card?.info, id:item.card.info.id , resInfo: { id: resInfo.id, imageId: resInfo.cloudinaryImageId, areaName: resInfo.areaName, deliveryTime: resInfo.sla.slaString } })) 
            } else {

            }
        }else {
            dispatch(addItem({ itemInfo: item?.card?.info, id:item.card.info.id , resInfo: { id: resInfo.id, name: resInfo.name, imageId: resInfo.cloudinaryImageId, areaName: resInfo.areaName, deliveryTime: resInfo.sla.slaString } }))
        }
    }

    const handleRemoveItem = () => {
        dispatch(removeItem({id: item?.card?.info?.id}))
    }
    console.log(cartItems)
    const isInCart = cartItems.length > 0 && cartItems.filter(item => item.id === item?.card?.info?.id)
    console.log(" This is in cart ==>",isInCart)

    return (
        <>
            <div className='flex items-center gap-4 pb-4 my-4 border-b justify-between'>
                <div className='w-[70%]'>
                    <div className={`${item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "text-green-600" : "text-red-700"} text-2xl`}>
                        {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? <svg className='w-6 rounded-xs' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="80" height="80" fill="transparent" stroke="green" strokeWidth="10" />
                            <circle cx="50" cy="50" r="25" fill="green" />
                        </svg> : <FaRegCaretSquareUp />}</div>
                    <h3 className='text-xl font-semibold'>{item?.card?.info?.name}</h3>
                    <h4 className='font-semibold'>₹{(item?.card?.info?.price / 100) || (item?.card?.info?.defaultPrice / 100)}</h4>
                    {item?.card?.info?.ratings.aggregatedRating.ratingCountV2 && <p className='text-green-700 flex items-center gap-1'><FaStar /> {item?.card?.info?.ratings.aggregatedRating.rating}<span className='text-gray-400'>({item?.card?.info?.ratings.aggregatedRating.ratingCountV2 > 1000? `${item?.card?.info?.ratings.aggregatedRating.ratingCountV2 / 1000}K` : item?.card?.info?.ratings.aggregatedRating.ratingCountV2})</span></p>}
                    <p className='text-gray-600'>{item?.card?.info?.description}</p>
                </div>
                <div>
                    <img className='w-36 h-36 rounded-lg bg-green-100 relative' src={CLOUDINARY_CDN_URL + item?.card?.info?.imageId} alt={`${item?.card?.info?.name} image`} />
                    {isInCart.length > 0 ? 
                        <div className='flex absolute gap-0 mt-[-2rem] ml-6'>
                            <button 
                                onClick={handleRemoveItem}
                                className='py-1 px-2 bg-white border-2 border-orange-500 border-r-orange-200 rounded-l-lg font-bold cursor-pointer'>-</button>
                            <div className='py-1 px-2  bg-white  border-t-2 border-b-2 border-orange-500  font-bold'>{isInCart.amount} 15</div>
                            <button 
                                onClick={handleItemAddClick}
                                className='py-1 px-2 bg-white border-2  border-orange-500 border-l-orange-200 rounded-r-lg font-bold cursor-pointer'>+</button>
                        </div> : 
                        <button
                            onClick={handleItemAddClick}
                            className='absolute py-1 px-6 mt-[-2rem] ml-8 bg-white border-2 border-orange-500 rounded-lg text-orange-500 font-bold cursor-pointer'>Add
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemCard
