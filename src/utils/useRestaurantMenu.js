import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async() => {
        const data = await fetch(SWIGGY_RESTAURANT_MENU_API+resId)
        const json = await data.json()
        setRestaurant(json?.data?.cards)
    }

    return restaurant
}

export default useRestaurantMenu