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
    let afterLoadingFlag = true

    debug.store("DOM Content Loaded")

    ScrollReveal().reveal("#logo", {delay: startDelay})
    ScrollReveal().reveal("#all-works", {delay: startDelay})
    ScrollReveal().reveal(".buttons", {delay: startDelay})
    ScrollReveal().reveal("#work-main-type-it-app-name", {delay: 1000})
    ScrollReveal().reveal("#lab", {
        reset: true,
        viewFactor: .05,
        afterReveal: () => {
            if (afterLoadingFlag) {
                ScrollReveal().clean("#logo")
                ScrollReveal().clean("#all-works")
                ScrollReveal().clean(".buttons")
                ScrollReveal().reveal("#logo", {reset: true, distance: "-100px", origin: "right"})
                ScrollReveal().reveal("#all-works", {reset: true, interval: 200})
                ScrollReveal().reveal(".buttons", {reset: true, interval: 200})
                afterLoadingFlag = false
            }
        }
    })
    ScrollReveal().reveal(".lab-big-header", {reset: true, distance: "-100px", origin: "right"})
    ScrollReveal().reveal(".lab-small-header", {delay: 200, reset: true, interval: 100, distance: "-70px"})
    ScrollReveal().reveal(".lab-link-wrapper", {delay: 300, reset: true, interval: 100, distance: "-50px"})
    ScrollReveal().reveal("#footer", {
        distance: '50px',
        reset: true,
        afterReveal: () => {
        }
    })
})