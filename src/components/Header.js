import { useState } from "react"
import { Link, NavLink } from "react-router"
import Fauxmato from "../../public/Faux-mato-logo.png"
import { GiShoppingBag } from "react-icons/gi"
import { IoSearch } from "react-icons/io5"


const Header = () => {
    const [logStatusButton, setLogStatusButton] = useState("Login")

    const handleLogStatusButtonClick = () => {
        setLogStatusButton(prev => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <header className="flex justify-between px-4 py-2 bg-white h-20 items-center shadow-lg font-[Gilroy] fixed w-[100%] z-50" >
            <div className="flex gap-2 items-center">
            <Link to='/' className="w-20"><img src={Fauxmato}alt="faux-mato-logo" className="w-[100%] rounded-lg" /></Link>
            <p className="max-[40rem]:hidden"><strong >Location:</strong> Kormangala, Banglore</p>
            </div>
            <ul className="flex gap-4 pr-4 font-bold items-center max-[28rem]:pr-0 max-[28rem]:gap-2">
                <NavLink className={({ isActive }) => (isActive && 'text-orange-500') + ' ' + "flex items-center gap-1 hover:underline active:text-orange-500"} to='/search'><IoSearch /> Search</NavLink>
                <NavLink to='/cart' className={({ isActive }) => (isActive && 'text-orange-500') + ' ' + "flex items-center gap-1 hover:underline"}><GiShoppingBag /><span className="text-lg">(0)</span></NavLink>
                <button className="login-logout-button" onClick={handleLogStatusButtonClick}>{logStatusButton}</button>
            </ul>
        </header>
    )
}

export default Header