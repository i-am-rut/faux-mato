import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import { CLOUDINARY_CDN_URL } from '../utils/constants'
import CartItemCard from './CartItemCard'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  console.log("cartItems ==>", cartItems)

  return (
    <div className='my-8 mx-2'>
      <div className='w-5xl'>
        <div className='max-w-5xl min-w-xl'>
          <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Cart</h1>
            {cartItems.length > 0 && 
              <button 
                onClick={handleClearCart}
                className='py-2 px-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white'>Clear cart</button>
            }
          </div>
          {cartItems.length > 0 ? 
            <div className='max-w-5xl my-8 p-4 bg-gray-200'>
              <div className='flex justify-between items-center bg-white p-4 rounded-t-lg'>
                <div className='flex gap-4 items-center'>
                  <img className='w-28 rounded-lg' src={CLOUDINARY_CDN_URL+cartItems[0].resInfo.imageId} alt={cartItems[0].resInfo.name} />
                  <div>
                    <h2 className='text-3xl font-bold'>{cartItems[0].resInfo.name}</h2>
                    <p className='text-lg text-gray-400'>{cartItems[0].resInfo.areaName}</p>
                  </div>
                </div>
                <h3 className='text-xl font-bold'>{cartItems[0].resInfo.deliveryTime}</h3>
              </div>
              <div className=''>
                {
                  cartItems.map(item => <CartItemCard item={item} />)
                }
              </div>
            </div> :
            <div>
              cart empty things
            </div>
          }
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
