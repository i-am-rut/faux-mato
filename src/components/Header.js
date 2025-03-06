import { useState } from "react"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {
    const [logStatusButton, setLogStatusButton] = useState("Login")
    const status = useOnlineStatus()

    const handleLogStatusButtonClick = () => {
        setLogStatusButton(prev => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <div className="header-container">
            <div className="header-logo-location-container">
            <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="faux-mato-logo" className="faux-mato-logo" />
            <p><strong>Location:</strong> Kormangala, Banglore</p>
            </div>
            <p>Online: {status? "✅" : "❌"}</p>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/cart'>Cart</Link>
                <button className="login-logout-button" onClick={handleLogStatusButtonClick}>{logStatusButton}</button>
            </ul>
        </div>
    )
}

export default Header