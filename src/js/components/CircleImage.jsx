import React from "react"

class CircleImage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <img className="circle-img"
                 src={this.props.img}
                 alt={this.props.img}/>
        )
    }
}

export default CircleImage