import React from "react"
import Header from "@/js/components/V2/Header.jsx"
import Footer from "@/js/components/V2/Footer.jsx"
import "simplebar-react/dist/simplebar.min.css"
import MainBg from "@/js/components/V2/MainBg.jsx"
import WorkBg from "@/js/components/V2/WorkBg.jsx"
import WorkMain from "@/js/components/V2/WorkMain.jsx"
import * as GeoPattern from "geopattern"
import _ from "lodash"
import Lab from "@/js/components/V2/Lab.jsx"


class AppV2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mainBg: "",
            workBg: ""
        }
    }

    componentDidMount() {
        let bgHeight = document.getElementById("main-bg").offsetHeight
        let fg = document.getElementById("main-fg")
        fg.style.height = `${bgHeight}px`
    }

    render() {
        return (
            <div id="app">
                <MainBg img=""/>
                <div id="main-fg"
                     className="main-fg">
                    {/*<SimpleBar*/}
                    {/*    style={{maxHeight: 980}}*/}
                    {/*           autoHide={true}>*/}
                    {/*</SimpleBar>*/}
                    <WorkBg img={this.state.workBg}>
                        <Header/>
                        <WorkMain/>
                    </WorkBg>
                    <Lab/>
                    <Footer img={GeoPattern.generate(_.random(10000).toString(), {color: "#000"}).toDataUrl()}/>
                </div>
            </div>
        )
    }
}

export default AppV2