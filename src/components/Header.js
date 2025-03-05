import { useState } from "react"


const Header = () => {
    const [logStatusButton, setLogStatusButton] = useState("Login")

    const handleLogStatusButtonClick = () => {
        setLogStatusButton(prev => prev === "Login" ? "Logout" : "Login")
    }

    return (
        <div className="header-container">
            <img src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" alt="faux-mato-logo" className="faux-mato-logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-logout-button" onClick={handleLogStatusButtonClick}>{logStatusButton}</button>
            </ul>
        </div>
    )
}

export default Header