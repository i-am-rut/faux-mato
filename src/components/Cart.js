import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import { CART_EMPTY_IMAGE, CLOUDINARY_CDN_URL } from '../utils/constants'
import CartItemCard from './CartItemCard'
import { Link } from 'react-router'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const total = cartItems.map(item => ({price : item?.itemInfo?.price || item?.itemInfo?.defaultPrice, amount : item?.amount})).reduce((acc, curr) => acc+(curr.price*curr.amount), 0)

  console.log("total ==>", total)

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
              <div className='bg-white'>
                {
                  cartItems.map(item => <CartItemCard key={item.id} item={item} />)
                }
              </div>
              <div className='flex justify-between p-4 bg-white rounded-b-lg'>
                <h3 className='text-xl font-bold'>Cart Total:</h3>
                <h3 className='text-2xl font-bold'>₹{total/100}</h3>
              </div>
            </div> :
            <div className='text-center my-12'>
              <img className='w-4/12 mx-auto' src={CART_EMPTY_IMAGE} alt='Cart empty image' />
              <h1 className='text-2xl font-bold text-gray-800 my-4'>Your cart is empty</h1>
              <p className='pb-4'>You can go to home page to view more restaurants</p>
              <Link to="/" className='px-4 py-2 rounded-lg text-white font-bold bg-orange-500 cursor-pointer'>Go TO HOMEPAGE</Link>
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
