import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'
import ItemCard from './ItemCard'

const ResMenuAccordian = ({ title, menu, amount, resInfo }) => {

    const [showItems, setShowItems] = useState(true)
    // console.log("this one ===>" , menu)

    const handleTitleClick = () => {
        setShowItems(!showItems)
    }
    
    

    return (
        <div className='border-b-2 border-gray-400'>
            <div onClick={handleTitleClick} className='flex justify-between items-center p-4 cursor-pointer rounded-xl hover:border-gray-600 '>
                <h1 className='text-xl font-bold '>{title} ({amount})</h1>
                {showItems? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {showItems &&<div className='menu-items-container px-4'>
                {menu.map(item => (
                    <ItemCard key={item?.card?.info?.id} item={item} resInfo={resInfo} />
                ))
                }
            </div>}
        </div>
    )
}


export const resMenuAccordianWithEnclosingCategory = (ResMenuAccordian) => {
    return ({title, list, resInfo}) => {
        return (
            <div className=''>
                <h1 className='text-2xl font-bold mt-8'>{title}</h1>
                <div className=''>
                    {
                        list.map(item => <ResMenuAccordian key={item.categoryId} title={item?.title} amount={item?.itemCards?.length} menu={item?.itemCards} resInfo={resInfo} />)
                    }
                </div>
            </div>
        )
    }
}


export default ResMenuAccordian


