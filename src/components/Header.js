import { useState } from "react"
import { Link } from "react-router"
import Fauxmato from "../../public/Faux-mato-logo.png"
import { GiShoppingBag } from "react-icons/gi"


const Header = () => {
    const [logStatusButton, setLogStatusButton] = useState("Login")

    const handleLogStatusButtonClick = () => {
        setLogStatusButton(prev => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <header className="flex justify-between px-4 py-2 bg-orange-100 h-20 items-center shadow-lg" >
            <div className="flex gap-2 items-center">
            <Link to='/' className="w-20"><img src={Fauxmato}alt="faux-mato-logo" className="w-[100%] rounded-lg" /></Link>
            <p className="max-[40rem]:hidden"><strong >Location:</strong> Kormangala, Banglore</p>
            </div>
            <ul className="flex gap-4 pr-4 font-bold items-center max-[28rem]:pr-0 max-[28rem]:gap-2">
                <Link to='/' className="hover:underline">Home</Link>
                <Link to='/cart' className="hover:underline text-xl flex items-center"><GiShoppingBag /><span className="text-lg">(0 items)</span></Link>
                <button className="login-logout-button" onClick={handleLogStatusButtonClick}>{logStatusButton}</button>
            </ul>
        </header>
    )
}

export default Header