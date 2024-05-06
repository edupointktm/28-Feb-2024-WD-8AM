import React from "react"
import ReactDom from "react-dom/client"
import App from "./App"

// import "../src/style/style.css"

import "../src/scss/main.scss"
import { BrowserRouter } from "react-router-dom"

ReactDom.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>
)