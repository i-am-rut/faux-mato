import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import ErrorPage from "./components/ErrorPage"
import RestaurantMenu from "./components/RestaurantMenu"
import useOnlineStatus from "./utils/useOnlineStatus"


const App = () => {
  const status = useOnlineStatus()
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        {status ? 
          <Routes>
          <Route path="/" element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="restaurant/:resId" element={<RestaurantMenu />} />
        </Routes> :
        <h1>Looks like You are not connected to internet. Check your connection.</h1>  
        }
        <Footer />
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

