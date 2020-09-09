import React from "react"

class WorkBg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "rgba(0,0,0,0)"
        }
    }

    render() {
        return (
            <div id="work-bg"
                 style={{backgroundImage: `url(${this.props.img})`}}
                 className="work-bg">
                <div id="work-bg-overlay"
                     style={{backgroundColor: this.state.bgColor}}>
                    {this.props.children}
                </div>
            </div>

        )
    }
}

export default WorkBg