import React from 'react'
import { useParams } from 'react-router'
import ResMenuPageResDetailsCard from './ResMenuPageResDetailsCard'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ShimmerResCards from './ShimmerResCard'
import { CiForkAndKnife } from 'react-icons/ci'
import ResMenuAccordian, { resMenuAccordianWithEnclosingCategory } from './ResMenuAccordian'

const RestaurantMenu = () => {
    const { resId } = useParams()
    const {restaurant, categories} = useRestaurantMenu(resId)
    const ResSubMenuAccordian = resMenuAccordianWithEnclosingCategory(ResMenuAccordian)
    
    if (!restaurant) return <div className='flex flex-wrap gap-4 w-6xl mt-32'><ShimmerResCards /></div>

    return (
        <div className='my-8 mx-2 max-w-5xl min-w-80'>
            {!restaurant ? <ShimmerResCards />
                : <>
                    <div className='mb-12'>
                        {restaurant && <ResMenuPageResDetailsCard resData={restaurant[2]?.card?.card?.info} />}
                    </div>
                    <div className='mb-12 border-gray-400 text-center flex justify-center items-center'>
                        <CiForkAndKnife className='mr-4 font-bold' />
                        M E N U
                        <CiForkAndKnife className='ml-4 font-bold' />
                    </div>
                    <div className='max-w-6xl'>
                        {categories &&
                            categories.map((c) => c?.card?.card?.categories ? <ResSubMenuAccordian key={c?.card?.card?.categoryId} title={c?.card?.card?.title} list={c?.card?.card?.categories} /> : <ResMenuAccordian key={c?.card?.card?.title} title={c?.card?.card?.title} amount={c?.card?.card?.itemCards?.length} menu={c?.card?.card?.itemCards} />)
                        }
                    </div>
                </>}
        </div>
    )
}

export default RestaurantMenu


