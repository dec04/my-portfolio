import React, {Component} from "react"

class WorkPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>{this.props.workId}</div>
        )
    }
}

export default WorkPage