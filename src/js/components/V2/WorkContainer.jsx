import React, {Component} from "react"
import Parallax from "parallax-js"
import "tilt.js"
import worksList from "@/js/models/WorksList"

class WorkContainer extends Component {
    constructor(props) {
        super(props)

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        $(".tilt").tilt({
            maxTilt:        24,
            perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
            easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            scale:          1.08,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          500,    // Speed of the enter/exit transition.
            transition:     true,   // Set a transition on enter/exit.
            disableAxis:    null,   // What axis should be disabled. Can be X or Y.
            reset:          true,   // If the tilt effect has to be reset on exit.
            glare:          true,  // Enables glare effect
            maxGlare:       1       // From 0 - 1.
        })

        worksList[this.props.workId].elements.map((e, index) => {
            new Parallax(document.getElementById(`work-img-scene-${index}`)).setInputElement(document.getElementById(`scene-${index}`))
            new Parallax(document.getElementById(`work-header-scene-${index}`)).setInputElement(document.getElementById(`scene-${index}`))
            new Parallax(document.getElementById(`work-description-scene-${index}`)).setInputElement(document.getElementById(`scene-${index}`))
        })
    }

    render() {
        const row = (item, k) => !!item ? <div className="row my-lg-5 py-lg-5 mb-5 d-flex align-items-stretch" id={`scene-${k}`} key={k}>
            <div className={`col-12 col-lg-6 d-flex justify-content-center ${k%2 ? "order-lg-2" : ""}`}
                 id={`work-img-scene-${k}`}
                 data-pointer-events="true"
                 data-hover-only="true"
                 data-relative-input="true">
                <a href={item.img}
                   data-depth=".1"
                   className="work-image d-flex justify-content-center"
                   target="_blank">
                    <div className="tilt tilt-wrapper">
                        <img src={item.img}
                             alt={item.img} />
                        <div className="tilt-overlay hoverable"
                             data-hoverable="show &rarr;"> </div>
                    </div>
                </a>
            </div>
            <div className={`col-12 col-lg-6 d-flex justify-content-center flex-column ${k%2 ? "order-lg-1" : ""}`}>
                <div id={`work-header-scene-${k}`}
                     data-pointer-events="true"
                     data-hover-only="true"
                     data-relative-input="true">
                    <h2 data-depth=".08" className="header mb-4 mt-4 mt-lg-0 text-center text-lg-left">{item.header}</h2>
                </div>
                <div id={`work-description-scene-${k}`}
                     data-pointer-events="true"
                     data-hover-only="true"
                     data-relative-input="true">
                    <p data-depth=".12" className="description text-center text-lg-left">
                        {item.description}
                    </p>
                </div>
            </div>
        </div> : <div>Nothing to show</div>

        return(
            <div id="work-inner-wrapper" className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h1 className="text-center">{worksList[this.props.workId].title}</h1>
                        <p className="text-center my-5">{worksList[this.props.workId].description}</p>
                    </div>
                </div>
                {
                    worksList[this.props.workId].elements.map((item, k) => row(item, k))
                }
            </div>
        )
    }
}

export default WorkContainer