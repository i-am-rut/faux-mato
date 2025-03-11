import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null)
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])
    useEffect(() => {
        if(restaurant) {
            setCategories(restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"))
        }
    }, [restaurant])

    const fetchMenu = async() => {
        const data = await fetch(SWIGGY_RESTAURANT_MENU_API+resId)
        const json = await data.json()
        setRestaurant(json?.data?.cards)
        
    }

    return {restaurant , categories}
}

export default useRestaurantMenu