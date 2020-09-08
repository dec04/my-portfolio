import React from "react"

class MainBg extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="main-bg"
                 style={{backgroundImage: `${this.props.img}`}}
                 className="main-bg"></div>

        )
    }
}

export default MainBg