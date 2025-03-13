import React from 'react'
import { FaRegSquareCaretUp } from 'react-icons/fa6'

const CartItemCard = ({item}) => {
  return (
    <div className='flex gap-4 max-w-5xl'>
        {item?.itemAttribute?.vegClassifier === "VEG" ? 
            <svg className='w-6 rounded-xs text-green-600' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" fill="transparent" stroke="green" strokeWidth="10" />
                <circle cx="50" cy="50" r="25" fill="green" />
            </svg> :
            <FaRegSquareCaretUp />
        }
        <h2 className='text-xl'>{item?.itemInfo?.name}</h2>
        <div className='flex gap-0'>
            <button>-</button>
            <div>{item?.amount}</div>
            <button>+</button>
        </div>
        <p className='font-bold'>₹{((item?.itemInfo?.price/100)* item?.amount) || ((item?.itemInfo?.defaultPrice/100)* item?.amount)}</p>
    </div>
  )
}

export default CartItemCard
