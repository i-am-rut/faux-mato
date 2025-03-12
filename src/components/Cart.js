import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

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
          <div>
            
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
