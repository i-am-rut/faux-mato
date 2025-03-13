import React from 'react'
import { FaRegSquareCaretUp } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'

const CartItemCard = ({item}) => {
  const dispatch = useDispatch()

  const handleAddItemClick = () => {
    dispatch(addItem(item))
  }

  const handleRemoveItemClick = () => {
    dispatch(removeItem(item))
  }


  return (
    <div className='flex gap-4 max-w-5xl items-center p-4 border-b-2 border-gray-300'>
        <div className='flex items-center gap-4 w-7/12'>
          {item?.itemAttribute?.vegClassifier === "VEG" ? 
              <svg className='w-6 rounded-xs text-green-600' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="80" height="80" fill="transparent" stroke="green" strokeWidth="10" />
                  <circle cx="50" cy="50" r="25" fill="green" />
              </svg> :
              <FaRegSquareCaretUp className='text-red-700' />
          }
          <h2 className='text-xl'>{item?.itemInfo?.name}</h2>
        </div>
        <div className='flex gap-0 w-3/12 text-center'>
            <button onClick={handleRemoveItemClick} className='px-2 py-1 border-green-600 border-2 border-r-0 cursor-pointer'>-</button>
            <div className='border-green-600 border-2 border-r-0 border-l-0 px-2 py-1'>{item?.amount}</div>
            <button onClick={handleAddItemClick} className='px-2 py-1 border-green-600 border-2 border-l-0 cursor-pointer'>+</button>
        </div>
        <p className='font-bold w-2/12 text-right'>₹{((item?.itemInfo?.price/100)* item?.amount) || ((item?.itemInfo?.defaultPrice/100)* item?.amount)}</p>
    </div>
  )
}

export default CartItemCard
