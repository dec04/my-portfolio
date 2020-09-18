import React from "react"
import * as GeoPattern from "geopattern"
import _ from "lodash"
import MenuBg from "@/js/components/V2/MenuBg.jsx"

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: ""
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.crossClickHandle = this.crossClickHandle.bind(this)
        this.linkHoverHandle = this.linkHoverHandle.bind(this)
    }

    componentDidMount() {
        this.setState({
            img: GeoPattern.generate(_.random(10000).toString(), {color: "#000"}).toDataUrl()
        })
    }

    crossClickHandle() {
        $("#menu").hide(300)
        $("#main-fg").show(300)
    }

    linkHoverHandle() {
        this.setState({
            img: GeoPattern.generate(_.random(10000).toString(), {color: "#000"}).toDataUrl()
        })
    }

    render() {
        return(
            <div id="menu">
                <MenuBg img={this.state.img} />
                <div id="menu-fg">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col d-flex flex-column justify-content-center">
                                <h1 className="menu-header-big mb-5">
                                    Menu
                                    <span className="ml-5 hoverable"
                                          data-hoverable="close"
                                          onClick={this.crossClickHandle}>
                                        <i className="fas fa-times"> </i>
                                    </span>
                                </h1>
                                <h3 className="menu-header-small mb-4">Links</h3>
                                <div className="menu-link-wrapper mt-2">
                                    <a href="#"
                                       className="hoverable"
                                       onMouseEnter={this.linkHoverHandle}
                                       data-hoverable="link &rarr;">About</a>
                                </div>
                                <div className="menu-link-wrapper mt-2">
                                    <a href="#"
                                       className="hoverable"
                                       onMouseEnter={this.linkHoverHandle}
                                       data-hoverable="link &rarr;">Journal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu