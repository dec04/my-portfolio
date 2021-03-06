import React from "react"
import axios from "axios"
import _ from "lodash"
import Backpax from "backpax"
import "vaguejs/Vague"

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
                .animate(20)
    }

    onHoverExitHandler() {
        $("#lab-bg")
                .Vague({
                    intensity: 20,
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
                                <div
                                        className="px-5 pl-lg-5 pl-md-5 pr-md-0 px-xl-1 col-12 col-md-6 col-lg-6 col-xl-4 offset-xl-2">
                                    <h2 className="lab-small-header">Web</h2>
                                    <div className="divider"></div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://altaygaz22.ru" target="_blank" rel="noopener"
                                           className="hoverable"
                                           data-hoverable="link &rarr;">Website
                                            altaygaz22.ru <span
                                                    className="ec ec-fuelpump"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://sibgaz.ru/gaz/" target="_blank" rel="noopener"
                                           className="hoverable" data-hoverable="link &rarr;">Website
                                            sibgaz.ru/gaz/ <span
                                                    className="ec ec-fuelpump"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://akgs.ru" className="hoverable" target="_blank" rel="noopener"
                                           data-hoverable="link &rarr;">Reworking website akgs.ru
                                            <span
                                                    className="ec ec-fuelpump"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://github.com/dec04/webpack-base-app" className="hoverable"
                                           target="_blank" rel="noopener"
                                           data-hoverable="link &rarr;">Webpack base app <span
                                                className="ec ec-package"> </span> <span
                                                className="ec ec-school-satchel"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                </div>
                                <div
                                        className="px-5 pr-lg-5 pr-md-5 pl-md-0 px-xl-1 col-12 col-md-6 mt-3 col-lg-6 mt-md-0 col-xl-4">
                                    <h2 className="lab-small-header">Android</h2>
                                    <div className="divider"></div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://play.google.com/store/apps/details?id=ru.gkgazoil"
                                           target="_blank"
                                           rel="noopener"
                                           className="hoverable" data-hoverable="link &rarr;">App for gk-gazoil.ru</a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.a"
                                           target="_blank" rel="noopener"
                                           className="hoverable" data-hoverable="link &rarr;">App for akgs.ru</a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.n"
                                           target="_blank" rel="noopener"
                                           className="hoverable" data-hoverable="link &rarr;">App for sibgaz.ru</a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://github.com/dec04/PermissionUtilsLibrary" className="hoverable"
                                           target="_blank" rel="noopener"
                                           data-hoverable="link &rarr;">Android permission utils <span
                                                className="ec ec-iphone"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://github.com/dec04/vacancy-test-app" className="hoverable"
                                           target="_blank" rel="noopener"
                                           data-hoverable="link &rarr;">Small vacancy test app <span
                                                className="ec ec-memo"> </span>
                                            <span className="ec ec-hourglass"> </span>
                                            <span className="ec ec-checkered-flag"> </span> </a>
                                        <div className="lab-link"></div>
                                    </div>
                                </div>
                                <div className="px-5 px-xl-1 col-12 mt-3 col-lg-12 col-xl-8 offset-xl-2 mt-lg-4">
                                    <h2 className="lab-small-header">Other stuff</h2>
                                    <div className="divider"></div>
                                    <div className="lab-link-wrapper">
                                        <a href="https://github.com/dec04/Flutter-Travel-App" className="hoverable"
                                           target="_blank" rel="noopener"
                                           data-hoverable="link &rarr;">Flutter travel app [<span
                                                className="ec ec-building-construction"> </span> concept]</a>
                                        <div className="lab-link"></div>
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
