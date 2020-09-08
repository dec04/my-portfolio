import("lodash")
import "@css/app.css"
import "@css/less.less"
import "@css/scss.scss"

import ReactDOM from "react-dom"
import {createElement} from "react"
import App from "@/js/components/V2/AppV2.jsx"
import ScrollReveal from "scrollreveal"

ReactDOM.render(createElement(App), document.getElementById("main-container"))

document.addEventListener("DOMContentLoaded", () => {
    const startDelay = 17000
    const delay = [startDelay, startDelay * 2, startDelay * 3, startDelay * 4, startDelay * 5]

    debug.store("DOM Content Loaded")
    ScrollReveal().reveal("#logo", {delay: startDelay})
    ScrollReveal().reveal("#all-works", {delay: startDelay})
    ScrollReveal().reveal(".buttons", {delay: startDelay})
    ScrollReveal().reveal("#work-main-type-it", {delay: 1000})
    ScrollReveal().reveal("#footer", {delay: startDelay})
})