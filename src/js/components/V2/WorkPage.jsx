import React, {Component} from "react"
import Cursor from "@/js/components/V2/Cursor.jsx"
import Menu from "@/js/components/V2/Menu.jsx"
import Header from "@/js/components/V2/Header.jsx"
import WorkContainer from "@/js/components/V2/WorkContainer.jsx"

class WorkPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div id="app">
                    <Menu/>
                    <Cursor/>
                    <div id="main-fg"
                         className="main-fg">
                        <Header/>
                        <WorkContainer workId={this.props.workId}/>
                    </div>
                </div>
        )
    }
}

export default WorkPage
