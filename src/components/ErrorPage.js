import React from 'react'
import { Link} from 'react-router'
import { ERROR_PAGE_IMAGE } from '../utils/constants'

const ErrorPage = () => {
  return (
    <div className='mt-25 max-w-5xl flex flex-col items-center'>
        <img className='w-[50%]' src={ERROR_PAGE_IMAGE} alt='404 page not found image' />
        <p className='mb-4 font-semibold'>Uh-oh! looks like the page you are trying to access, doesn't exist. Please start afresh.</p>
        <Link className='px-4 py-2 text-white bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-600 rounded-lg font-bold' to="/">GO HOME</Link>
    </div>
  )
}

export default ErrorPage
