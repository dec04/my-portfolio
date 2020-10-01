import React from "react"

class SsrTest extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("SSR WORKS CORRECT")
    }

    render() {
        return (
            <div id="ssr-test">{this.props.workId}</div>
        )
    }
}

export default SsrTest