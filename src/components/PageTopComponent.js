import React, { useEffect, useState } from 'react'
import { CLOUDINARY_CDN_URL } from '../utils/constants'
import { Link } from 'react-router'

const PageTopComponent = ({ data }) => {
    const [dishList, setDishList] = useState(null)
    useEffect(() => {
        if(data) {setDishList(data?.card?.card?.gridElements?.infoWithStyle?.info)}
    }, [])

    return (
        <div className='my-8 max-w-6xl min-w-80'>
            {data && <h1 className='text-3xl font-bold pb-4'>{data?.card?.card?.header?.title}</h1>}
            {data &&   
                <div className='w-full gap-2 flex overflow-x-auto pb-4 border-b-2 border-gray-200 scrollbar flex-nowrap'>
                    {dishList?.map(dish => (
                            <Link to={`/${dish?.action?.text}`} key={dish.id} className='p-2 min-w-[200px] cursor-pointer'>
                                <img className='w-full' src={CLOUDINARY_CDN_URL + dish.imageId} alt="Dish image" />
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    
    )
}

export default PageTopComponent
