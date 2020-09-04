import("lodash")
import "@css/app.css"
import "@css/less.less"
import "@css/scss.scss"

import ReactDOM from "react-dom"
import {createElement} from "react"
import App from "@/js/components/App.jsx"

ReactDOM.render(createElement(App), document.getElementById("main-container"))

document.addEventListener("DOMContentLoaded", () => {

    debug.store("DOM Content Loaded")

})