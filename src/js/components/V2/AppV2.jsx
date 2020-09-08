import React from "react"
import Header from "@/js/components/V2/Header.jsx"
import Footer from "@/js/components/V2/Footer.jsx"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import MainBg from "@/js/components/V2/MainBg.jsx"
import WorkBg from "@/js/components/V2/WorkBg.jsx";
import WorkMain from "@/js/components/V2/WorkMain.jsx";

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
                    <SimpleBar style={{maxHeight: 980}}
                               autoHide={true}>
                        <WorkBg img={this.state.workBg}>
                            <Header/>
                            <WorkMain/>
                        </WorkBg>
                        <Footer/>
                    </SimpleBar>
                </div>
            </div>
        )
    }
}

export default AppV2