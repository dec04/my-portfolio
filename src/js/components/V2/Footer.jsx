import React from "react"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="footer"
                         className="col-10 offset-1 d-flex justify-content-between align-items-center align-content-center">
                        footer
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer