import React from "react"
import TypeIt from "typeit/dist/typeit.min"
import GasImg1 from "@img/patterns/gas.jpg"
import GasImg2 from "@img/patterns/gas2.jpg"
import GasImg3 from "@img/patterns/gas3.jpg"
import GasImg4 from "@img/patterns/gas4.jpg"
import WebApp1 from "@img/mockups/webMockup1.jpg"
import WebApp2 from "@img/mockups/webMockup2.jpg"
import WebSvg from "@img/web-browser.svg"
import MobileApp1 from "@img/mockups/appMockup1.jpg"
import MobileApp2 from "@img/mockups/appMockup2.jpg"
import MobileApp3 from "@img/mockups/appMockup3.jpg"
import MobileSvg from "@img/smartphone.svg"
import MobileImg1 from "@img/patterns/mobile.jpg"
import MobileImg2 from "@img/patterns/mobile2.jpg"
import MobileImg3 from "@img/patterns/mobile3.jpg"
import MobileImg4 from "@img/patterns/mobile4.jpg"
import ScrollReveal from "scrollreveal"
import Parallax from "parallax-js"
import Vivus from "vivus/dist/vivus.min"

class WorkMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appNameInstance: null,
            appDescInstance: null,
            curEl: 0,
            strings: [
                {
                    name: "altaygaz22",
                    description: [
                        "Web application for order gas balloons at home",
                        "Only for abonents akgs.ru and sibgaz.ru company"
                    ],
                    image: [
                        WebApp1,
                        WebApp2
                    ],
                    patterns: [
                        GasImg1,
                        GasImg2,
                        GasImg3,
                        GasImg4
                    ],
                    logo: WebSvg
                },
                {
                    name: "Order gas balloon app",
                    description: [
                        "Android application for order gas balloons at home",
                        "It's mobile version of",
                        "altaygaz22.ru and sibgaz.ru/gaz/ web application"
                    ],
                    image: [
                        MobileApp1,
                        MobileApp2,
                        MobileApp3,
                    ],
                    patterns: [
                        MobileImg1,
                        MobileImg2,
                        MobileImg3,
                        MobileImg4
                    ],
                    logo: MobileSvg
                },
            ]
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.state.appNameInstance = new TypeIt("#work-main-type-it-app-name", {
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
            .delete(1)
            .pause(2500)
            .type("Hi").pause(2000).type(", my name is Via").pause(250).delete(1).type("atl").pause(250).delete(3).type("taliy.")
            .break().pause(300)
            .type("Sometimes I dei").delete(1).type("sgn").move(-2).type("i").move(2).type(" and develop some stuff.")
            .pause(700).break().type("Let me show You...")
            .go()

        let workProjectParallax = new Parallax(document.getElementById("work-project"))
        let sceneAppName = new Parallax(document.getElementById("scene-app-name"))
        let sceneAppDesc = new Parallax(document.getElementById("scene-app-desc"))
        workProjectParallax.setInputElement(document.getElementById("main-bg"))
        sceneAppName.setInputElement(document.getElementById("main-bg"))
        sceneAppDesc.setInputElement(document.getElementById("main-bg"))
    }

    handleClick(math) {
        this.state.appNameInstance.destroy()
        if (!!this.state.appDescInstance)
            this.state.appDescInstance.destroy()
        $("#work-main-type-it-app-name").text("")
        $("#work-main-type-it-app-description").text("")

        let next = math === "inc" ? this.state.curEl + 1 : this.state.curEl - 1

        if (next < 0)
            next = this.state.strings.length - 1
        else if (next > this.state.strings.length - 1)
            next = 0

        this.setState({
            curEl: next
        })

        let appName = new TypeIt("#work-main-type-it-app-name", {
            speed: 20,
            strings: this.state.strings[next].name,
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
        let appDesc = new TypeIt("#work-main-type-it-app-description", {
            speed: 20,
            strings: this.state.strings[next].description,
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
        this.state.appNameInstance = appName
        this.state.appDescInstance = appDesc
        appName.go()
        appDesc.go()
        this.props.bgHandle(this.state.strings[next].image[_.random(0, this.state.strings[next].image.length - 1)])
        ScrollReveal().clean("#work-project")
        ScrollReveal().reveal("#work-project", {delay: 300, reset: true, distance: "50px"})

        $("#work-project-logo").html("")
        new Vivus("work-project-logo", {
            file: this.state.strings[next].logo,
            type: 'delayed',
            duration: 300,
            onReady: function (myVivus) {
                myVivus.el.setAttribute('filter', 'invert(93%) sepia(61%) saturate(1502%) hue-rotate(340deg) brightness(103%) contrast(91%)');
            }
        })
    }

    render() {
        return (
            <div id="work-main" className="container">
                <div className="row">
                    <div id="scene-app-name"
                         data-pointer-events="true"
                         data-hover-only="true"
                         data-relative-input="true"
                         className="col-8 offset-2">
                        <p id="work-main-type-it-app-name"
                           data-depth=".03"
                           className="text-center"> </p>
                    </div>
                </div>
                <div className="row">
                    <div id="scene-app-desc"
                         data-pointer-events="true"
                         data-hover-only="true"
                         data-relative-input="true"className="col">
                        <p id="work-main-type-it-app-description"
                           data-depth=".06"> </p>
                    </div>
                    <div className="col">
                        <div id="work-project"
                             data-pointer-events="true"
                             data-hover-only="true"
                             data-relative-input="true">
                            <div id="work-project-logo"
                                 data-depth=".18"
                                 style={{backgroundImage: `url()`}}
                            >
                            </div>
                            <a id="work-project-button"
                               href="#"
                               data-depth=".4"
                               className="px-3 py-1">enter <i className="ml-2 fas fa-level-down-alt"> </i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end align-items-end">
                        <div className="buttons">
                            <button onClick={() => {
                                this.handleClick("dec")
                            }} className="mx-3"><i
                                className="fas fa-long-arrow-alt-left"> </i> prev
                            </button>
                            <button onClick={() => {
                                this.handleClick("inc")
                            }} className="mx-3">next <i
                                className="fas fa-long-arrow-alt-right"> </i></button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default WorkMain