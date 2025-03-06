import React from 'react'
import { useLocation } from 'react-router'
import { ERROR_PAGE_IMAGE } from '../utils/constants'

const ErrorPage = () => {
    let location = useLocation()
  return (
    <div className='error-page-container'>
        <img src={ERROR_PAGE_IMAGE} alt='404 page not found image' />
        <h1>The path '{location.pathname}' you are looking for does not exist!</h1>
    </div>
  )
}

export default ErrorPage
