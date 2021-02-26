import React from "react"
import Header from "@/js/components/V2/Header.jsx"
import Footer from "@/js/components/V2/Footer.jsx"
import MainBg from "@/js/components/V2/MainBg.jsx"
import WorkBg from "@/js/components/V2/WorkBg.jsx"
import WorkMain from "@/js/components/V2/WorkMain.jsx"
import * as GeoPattern from "geopattern"
import _ from "lodash"
import Lab from "@/js/components/V2/Lab.jsx"
import Cursor from "@/js/components/V2/Cursor.jsx"
import Menu from "@/js/components/V2/Menu.jsx"

class AppV2 extends React.Component {
    constructor(props) {
        super(props)

        this.mainBgElement = React.createRef()
        this.state = {
            mainBg: "",
            workBg: "",
            timeOut: ""
        }

        this.changeBgHandle = this.changeBgHandle.bind(this)
        this.mouseListenerEnter = this.mouseListenerEnter.bind(this)
        this.mouseListenerExit = this.mouseListenerExit.bind(this)
    }

    componentDidMount() {
        let bgHeight = document.getElementById("main-bg").offsetHeight
        let fg = document.getElementById("main-fg")
        fg.style.height = `${bgHeight}px`
    }

    changeBgHandle(img) {
        clearTimeout(this.state.timeOut)
        this.mainBgElement.current.changeBgColor("rgba(0,0,0,1)")
        this.setState({
            timeOut: setTimeout(() => this.setState({
                workBg: img,
                // mainBg: GeoPattern.generate(_.random(10000).toString(), {color: "#000"}).toDataUrl()
            }, () => this.mainBgElement.current.changeBgColor("rgba(0,0,0,.8)")), 300)
        })
    }

    mouseListenerEnter() {
        this.mainBgElement.current.changeBgColor("rgba(0,0,0,1)")
    }

    mouseListenerExit() {
        this.mainBgElement.current.changeBgColor("rgba(0,0,0,.8)")
    }

    render() {
        return (
                <div id="app">
                    <Menu/>
                    <Cursor/>
                    <MainBg
                            ref={this.mainBgElement}
                            img={this.state.mainBg}/>
                    <div id="main-fg"
                         className="main-fg">
                        <WorkBg img={this.state.workBg}>
                            <Header/>
                            <WorkMain bgHandle={this.changeBgHandle}/>
                        </WorkBg>
                        <div id="mouse-listener-helper"
                             onMouseEnter={this.mouseListenerEnter}
                             onMouseLeave={this.mouseListenerExit}>
                            <Lab/>
                            <Footer img={GeoPattern.generate(_.random(10000).toString(), {color: "#000"}).toDataUrl()}/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AppV2
