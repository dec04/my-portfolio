import React from "react"
import scrollImg from "@img/scroll.svg"

class RoadmapSection extends React.Component {
    constructor(props) {
        super(props)
    }

    ScrollIcon() {
        return <div className="svg-scroll-wrapper">
            <span>scroll down</span>
            <img className="scroll" src={scrollImg} alt={scrollImg}/>
        </div>
    }

    render() {
        return (
            <div id="roadmap-section">
                <div className="roadmap pl-5">
                    <i className="fas fas-roadmap fa-times-circle"> </i>
                    {this.props.scroll === true && <this.ScrollIcon/>}
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default RoadmapSection