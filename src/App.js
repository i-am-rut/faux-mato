import React from "react"
import ReactDOM from "react-dom/client"
import Layout from "./components/Layout"
import Body from "./components/Body"
import { BrowserRouter, Route, Routes } from "react-router"
import About from "./components/About"
import Cart from "./components/Cart"
import ErrorPage from "./components/ErrorPage"
import RestaurantMenu from "./components/RestaurantMenu"
import useOnlineStatus from "./utils/useOnlineStatus"
import Search from "./components/Search"
import DishWiseRestaurants from "./components/DishWiseRestaurants"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"


const App = () => {
  const status = useOnlineStatus()
  return (
    <div className="app-container">
      <Provider store={appStore} >
        <BrowserRouter>
          {status ?
            <Routes>
              <Route path="/" element={<Layout />} >
                <>
                  <Route index element={<Body />} />
                  <Route path="about" element={<About />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="restaurant/:resId" element={<RestaurantMenu />} />
                  <Route path="search" element={<Search />} />
                  <Route path=":dishSlug" element={<DishWiseRestaurants />} />
                  <Route path="*" element={<ErrorPage />} />
                </>
              </Route>
            </Routes>
            :
            <div className="mt-0 bg-blue-300 h-[100vh]">
              <h1 className="pt-60 px-4 font-bold text-2xl sm:text-4xl sm:font-bold"> Looks like you are offline 😔. Check your internet connection 🛜.</h1>
            </div>
          }
        </BrowserRouter>
      </Provider>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

