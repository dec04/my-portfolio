import React from "react"

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="menu">
                    <a className="ml-3"
                       href="#">1</a>
                    <a className="ml-3"
                       href="#">2</a>
                    <a className="ml-3"
                       href="#">3</a>
                </div>
        )
    }
}

export default Menu
