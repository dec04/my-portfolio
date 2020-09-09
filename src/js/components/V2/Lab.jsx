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
                intensity: 1,
                forceSVGUrl: false,
                animationOptions: {
                    duration: 300,
                    easing: "linear"
                }
            })
            .animate(6)
    }

    onHoverExitHandler() {
        $("#lab-bg")
            .Vague({
                intensity: 6,
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
            new Backpax("#lab-bg");
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
                            <div className="col">
                                lab
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lab