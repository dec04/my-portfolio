import React from "react"

class WorkBg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: ""
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        this.setState({
            img: this.props.img
        })
    }

    render() {
        return (
            <div id="work-bg"
                 style={{backgroundImage: `${this.state.img}`}}
                 className="work-bg">
                {this.props.children}
            </div>

        )
    }
}

export default WorkBg