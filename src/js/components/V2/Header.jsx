import React from "react"
import Logo from "@/js/components/V2/Logo.jsx"

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.allWorksClickHandler = this.allWorksClickHandler.bind(this)
    }

    allWorksClickHandler() {
        $("#main-fg").hide(300)
        $("#menu").show(300)
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="header"
                         className="col-10 offset-1 d-flex justify-content-between align-items-center align-content-center margit-t-140">
                        <a href="/"><Logo/></a>
                        <button onClick={this.allWorksClickHandler}
                                id="all-works"
                                className="hoverable"
                                data-hoverable="menu">
                            <i className="fas fa-bars"> </i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header