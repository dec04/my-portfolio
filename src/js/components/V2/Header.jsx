import React from "react"
import Logo from "@/js/components/V2/Logo.jsx"

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="header"
                         className="col-10 offset-1 d-flex justify-content-between align-items-center align-content-center margit-t-140">
                        <Logo/>
                        <a id="all-works" href="#">all works</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header