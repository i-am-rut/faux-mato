import { useState } from "react"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import Fauxmato from "../../public/Faux-mato-logo.png"
import { GiShoppingBag } from "react-icons/gi"


const Header = () => {
    const [logStatusButton, setLogStatusButton] = useState("Login")
    const status = useOnlineStatus()

    const handleLogStatusButtonClick = () => {
        setLogStatusButton(prev => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <div className="flex justify-between px-4 bg-green-100 h-20 items-center shadow-lg" >
            <div className="flex gap-2 items-center">
            <Link to='/'><img src={Fauxmato}alt="faux-mato-logo" className="w-20 rounded-lg" /></Link>
            <p className="sm:hidden"><strong className="sm:hidden">Location:</strong> Kormangala, Banglore</p>
            </div>
            <p className="hidden ">Online: {status? "✅" : "❌"}</p>
            <ul className="flex gap-4 pr-4 font-bold items-center">
                <Link to='/' className="hover:underline">Home</Link>
                <Link to='/about' className="hover:underline">About</Link>
                <Link to='/contact' className="hover:underline">Contact</Link>
                <Link to='/cart' className="hover:underline text-xl flex items-center"><GiShoppingBag /><span className="text-lg">(0)</span></Link>
                <button className="login-logout-button" onClick={handleLogStatusButtonClick}>{logStatusButton}</button>
            </ul>
        </div>
    )
}

export default Header