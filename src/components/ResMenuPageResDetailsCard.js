import React from 'react'
import { FaStar } from 'react-icons/fa'

const ResMenuPageResDetailsCard = ({resData}) => {
    const {name, cuisines, avgRating, totalRatingsString, costForTwoMessage, areaName, sla} = resData
  return (
    <div className='res-details-card-container'>
      <h1>{name}</h1>
      <div className='res-details-card-info'>
        <p className='rating-container'><FaStar /> {avgRating} ({totalRatingsString}) • {costForTwoMessage}</p>
        <p className='cuisines'>{cuisines.join(", ")}</p>
        <p>Outlet: <span>{areaName}</span></p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  )
}

export default ResMenuPageResDetailsCard
