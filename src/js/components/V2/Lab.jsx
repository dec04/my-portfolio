import React from "react"
import axios from "axios"
import _ from "lodash"
import Backpax from "backpax"
import "vaguejs/Vague"
import Vivus from "vivus/dist/vivus.min"
import "emoji.css/dist/emoji.min.css"
import LinkSvg from "@img/right-arrow.svg"

class Lab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "",
            codeImgs: "https://api.unsplash.com/collections/80723788/photos",
            abstractImgs: "https://api.unsplash.com/collections/67588036/photos",
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.onHoverEnterHandler = this.onHoverEnterHandler.bind(this)
        this.onHoverExitHandler = this.onHoverExitHandler.bind(this)
    }

    onHoverEnterHandler() {
        $("#lab-bg")
            .Vague({
                intensity: 0,
                forceSVGUrl: false,
                animationOptions: {
                    duration: 300,
                    easing: "linear"
                }
            })
            .animate(15)
    }

    onHoverExitHandler() {
        $("#lab-bg")
            .Vague({
                intensity: 15,
                forceSVGUrl: false,
                animationOptions: {
                    duration: 300,
                    easing: "linear"
                }
            })
            .animate(0)
    }

    componentDidMount() {
        axios.get(this.state.abstractImgs, {
            params: {
                "client_id": "lUciy_ngNw1rQfxzXGh_WukbWSx7pLSn0PG7JHqf7HQ"
            }
        }).then(r => {
            const img = r.data[_.random(r.data.length - 1)]
            this.setState({
                img: img.urls.regular
            })
            new Backpax("#lab-bg")
        })

        let links = document.querySelectorAll(".lab-link")
        links.forEach(l => {

        })
    }

    linkHoverHandler(e) {
        new Vivus(e.target.querySelector(".lab-link"), {
            file: LinkSvg,
            type: 'delayed',
            duration: 80,
            onReady: function (myVivus) {
                myVivus.el.setAttribute('width', '30px')
                myVivus.el.setAttribute('filter', 'invert(100%) sepia(83%) saturate(0%) hue-rotate(298deg) brightness(109%) contrast(101%)')
            }
        })
    }

    linkLeaveHandler(e) {
        e.target.querySelector(".lab-link").innerHTML = ""
    }

    render() {
        return (
            <div id="lab"
                 className="container-fluid">
                <div id="lab-bg"
                     data-img={this.state.img}>
                </div>
                <div id="lab-fg"
                     onMouseEnter={this.onHoverEnterHandler}
                     onMouseLeave={this.onHoverExitHandler}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 offset-1 py-5">
                                <h1 className="lab-big-header">Lab</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 offset-3">
                                <h2 className="lab-small-header">Web</h2>
                                <div className="divider"> </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://altaygaz22.ru" className="hoverable" data-hoverable="link &rarr;">Site
                                        altaygaz22.ru <span
                                            className="ec ec-fuelpump"> </span> </a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://sibgaz.ru/gaz/" className="hoverable" data-hoverable="link &rarr;">Site
                                        sibgaz.ru/gaz/ <span
                                            className="ec ec-fuelpump"> </span> </a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="#" className="hoverable" data-hoverable="link &rarr;">Reworking akgs.ru
                                        [<span className="ec ec-raised-hand"> </span>WIP <span
                                            className="ec ec-no-entry"></span>]</a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://github.com/dec04/webpack-base-app" className="hoverable"
                                       data-hoverable="link &rarr;">Webpack base app <span
                                        className="ec ec-package"> </span> <span
                                        className="ec ec-school-satchel"> </span> </a>
                                    <div className="lab-link"> </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <h2 className="lab-small-header">Android</h2>
                                <div className="divider"> </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.a"
                                       className="hoverable" data-hoverable="link &rarr;">Gas balloon <span
                                        className="ec ec-balloon"> </span> app for
                                        akgs.ru</a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.n"
                                       className="hoverable" data-hoverable="link &rarr;">Gas balloon app for
                                        sibgaz.ru</a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://github.com/dec04/PermissionUtilsLibrary" className="hoverable"
                                       data-hoverable="link &rarr;">Android permission utils <span
                                        className="ec ec-iphone"> </span> </a>
                                    <div className="lab-link"> </div>
                                </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://github.com/dec04/vacancy-test-app" className="hoverable"
                                       data-hoverable="link &rarr;">Small vacancy test app <span
                                        className="ec ec-memo"> </span>
                                        <span className="ec ec-hourglass"> </span>
                                        <span className="ec ec-checkered-flag"> </span> </a>
                                    <div className="lab-link"> </div>
                                </div>
                            </div>
                            <div className="col-6 offset-3 mt-5">
                                <h2 className="lab-small-header">Other stuff</h2>
                                <div className="divider"> </div>
                                <div className="lab-link-wrapper"
                                     onMouseEnter={this.linkHoverHandler}
                                     onMouseLeave={this.linkLeaveHandler}>
                                    <a href="https://github.com/dec04/Flutter-Travel-App" className="hoverable"
                                       data-hoverable="link &rarr;">Flutter travel app [<span
                                        className="ec ec-building-construction"> </span> concept]</a>
                                    <div className="lab-link"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lab