import React from "react"

class MainBg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "rgba(0,0,0,.9)"
        }

        this.changeBgColor = this.changeBgColor.bind(this)
    }

    changeBgColor(bg) {
        this.setState({
            bgColor: bg
        })
    }

    render() {
        return (
            <div id="main-bg"
                 style={{
                     backgroundImage: `${this.props.img}`,
                     backgroundColor: `${this.state.bgColor}`
                 }}
                 className="main-bg"></div>

        )
    }
}

export default MainBg