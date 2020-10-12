import React, {Component} from "react"
import webMockup from "@img/mockups/webMockup3.jpg"
import Parallax from "parallax-js"
import "tilt.js"

class WorkContainer extends Component {
    constructor(props) {
        super(props)
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

        $('.work-img-scene').map((i, e) =>
            new Parallax(e).setInputElement(document.getElementById("main-fg")))
        $('.work-header-scene').map((i, e) =>
            new Parallax(e).setInputElement(document.getElementById("main-fg")))
        $('.work-description-scene').map((i, e) =>
            new Parallax(e).setInputElement(document.getElementById("main-fg")))
    }

    render() {
        return(
            <div className="container">
                <div className="row my-5 d-flex align-items-stretch" >
                    <div className="work-img-scene col-12 col-lg-6 d-flex justify-content-center"
                         data-pointer-events="true"
                         data-hover-only="true"
                         data-relative-input="true">
                        <a href={webMockup}
                           data-depth=".02"
                           className="work-image text-center"
                           target="_blank">
                            <div className="tilt tilt-wrapper">
                                <img src={webMockup}
                                     alt={webMockup} />
                                 <div className="tilt-overlay hoverable"
                                      data-hoverable="show &rarr;"> </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center flex-column">
                        <div className="work-header-scene"
                             data-pointer-events="true"
                             data-hover-only="true"
                             data-relative-input="true">
                            <h1 data-depth=".04" className="header mb-4">Header</h1>
                        </div>
                        <div className="work-description-scene">
                            <p data-depth=".06" className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae, deserunt dolorem earum
                                error ex illum laudantium magni minima necessitatibus nobis odio officia pariatur quibusdam
                                recusandae sequi ut veritatis voluptates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkContainer