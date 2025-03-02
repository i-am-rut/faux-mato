import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("h1", {id: 1}, "This is the begining of something new 😉!")

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)