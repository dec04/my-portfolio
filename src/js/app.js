import "@css/app.css"
import "@css/less.less"
import "@css/scss.scss"

import ReactDOM from "react-dom"
import {createElement} from "react"
import App from "@/js/components/V2/AppV2.jsx"
import ScrollReveal from "scrollreveal"
import Vivus from "vivus/dist/vivus.min"

import GithubSvg from "@img/github.svg"
import FacebookSvg from "@img/facebook.svg"
import TwitterSvg from "@img/twitter.svg"
import InstagramSvg from "@img/instagram.svg"
import("lodash")

const appContainer = document.getElementById("main-container")

if (!!appContainer)
    ReactDOM.render(createElement(App), appContainer)

document.addEventListener("DOMContentLoaded", () => {
    const startDelay = 170
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
    ScrollReveal().reveal(".divider", {reset: true, distance: "-30px", interval: 100})
    ScrollReveal().reveal("#github-social", {
        reset: true, distance: "30px", interval: 100, afterReveal: (el) => {
            new Vivus(el, {
                file: GithubSvg,
                type: 'delayed',
                duration: 80,
                onReady: function (myVivus) {
                    myVivus.el.setAttribute('filter', 'invert(100%) sepia(83%) saturate(0%) hue-rotate(298deg) brightness(109%) contrast(101%)')
                }
            })
        },
        beforeReveal: (el) => $(el).html("")
    })
    ScrollReveal().reveal("#facebook-social", {
        reset: true, distance: "30px", interval: 100, afterReveal: (el) => {
            new Vivus(el, {
                file: FacebookSvg,
                type: 'delayed',
                duration: 80,
                onReady: function (myVivus) {
                    myVivus.el.setAttribute('filter', 'invert(100%) sepia(83%) saturate(0%) hue-rotate(298deg) brightness(109%) contrast(101%)')
                }
            })
        },
        beforeReveal: (el) => $(el).html("")
    })
    ScrollReveal().reveal("#twitter-social", {
        reset: true, distance: "30px", interval: 100, afterReveal: (el) => {
            new Vivus(el, {
                file: TwitterSvg,
                type: 'delayed',
                duration: 80,
                onReady: function (myVivus) {
                    myVivus.el.setAttribute('filter', 'invert(100%) sepia(83%) saturate(0%) hue-rotate(298deg) brightness(109%) contrast(101%)')
                }
            })
        },
        beforeReveal: (el) => $(el).html("")
    })
    ScrollReveal().reveal("#instagram-social", {
        reset: true, distance: "30px", interval: 100, afterReveal: (el) => {
            new Vivus(el, {
                file: InstagramSvg,
                type: 'delayed',
                duration: 80,
                onReady: function (myVivus) {
                    myVivus.el.setAttribute('filter', 'invert(100%) sepia(83%) saturate(0%) hue-rotate(298deg) brightness(109%) contrast(101%)')
                }
            })
        },
        beforeReveal: (el) => $(el).html("")
    })
    ScrollReveal().reveal(".lab-small-header", {delay: 200, reset: true, interval: 100, distance: "-70px"})
    ScrollReveal().reveal(".lab-link-wrapper", {delay: 300, reset: true, interval: 100, distance: "-50px"})
    ScrollReveal().reveal("#footer", {
        distance: '50px',
        reset: true,
        afterReveal: () => {
        }
    })
    ScrollReveal().reveal(".footer-big-header", {reset: true, distance: "-100px", origin: "right"})
    ScrollReveal().reveal(".footer-small-header", {delay: 200, reset: true, interval: 100, distance: "-70px"})
    ScrollReveal().reveal(".language-javascript *", {reset: true, distance: "-100px", interval: 10, origin: "right"})
    ScrollReveal().reveal("#copyright-info", {reset: true, distance: "-100px", origin: "right"})
    ScrollReveal().reveal(".work-links", {reset: true, interval: 100, distance: "-70px"})
})