import React from "react"
import {TweenMax} from "gsap/all"

class Cursor extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        //region CURSOR
        let cursor = document.querySelector(".cursor__ball--small"),
                dot = document.querySelector("#dot"),
                cursorText = document.querySelector(".cursor-text"),
                follower = document.querySelector(".cursor__ball--big"),
                hoverable = document.querySelectorAll(".hoverable")

        let posX = 0,
                posY = 0,
                mPosX = 0,
                mPosY = 0

        let mouseX = 0,
                mouseY = 0

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 15
                posY += (mouseY - posY) / 15

                TweenMax.to(follower, .2, {
                    css: {
                        left: posX - 15,
                        top: posY - 7.5
                    }
                })

                mPosX += (mouseX - mPosX) / 3
                mPosY += (mouseY - mPosY) / 3

                TweenMax.to(cursor, .001, {
                    css: {
                        left: mPosX,
                        top: mPosY
                    }
                })
            }
        })

        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
        })
        hoverable.forEach(el => el.addEventListener("mouseenter", (e) => {
            if (!!e.target.getAttribute("data-hoverable"))
                TweenMax.to(follower, .3, {
                    scale: 5,
                    fill: "rgba(0,0,0,.9)",
                    zIndex: 101
                })
            else
                TweenMax.to(follower, .3, {
                    scale: 5,
                    fill: "rgba(0,0,0,.2)",
                    zIndex: 11
                })
            dot.style.opacity = .8
            cursorText.style.opacity = 1
            cursorText.innerHTML = !!e.target.getAttribute("data-hoverable") ?
                    e.target.getAttribute("data-hoverable") :
                    ""
        }))
        hoverable.forEach(el => el.addEventListener("mouseleave", () => {
            TweenMax.to(follower, .3, {
                scale: 1,
                fill: "rgba(255,255,255,0)"
            })
            dot.style.opacity = 1
            cursorText.style.opacity = 0
        }))
        //endregion
    }

    render() {
        return (
                <div className="cursor">
                    <div className="cursor__ball cursor__ball--big ">
                        <svg height="40" width="40">
                            <circle cx="20" cy="20" r="12" strokeWidth=".5"></circle>
                        </svg>
                    </div>

                    <div className="cursor__ball cursor__ball--small">
                        <svg id="dot" height="10" width="10">
                            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                        </svg>
                        <span className="cursor-text d-flex justify-content-center align-content-center align-items-center text-center"> </span>
                    </div>
                </div>
        )
    }
}

export default Cursor
