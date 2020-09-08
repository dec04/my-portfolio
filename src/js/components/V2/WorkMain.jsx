import React from "react"
import TypeIt from "typeit/dist/typeit.min"

class WorkMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            typeItInstance: null,
            curEl: 0,
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.state.typeItInstance = new TypeIt("#work-main-type-it", {
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
            .delete(1)
            .pause(2500)
            .type("Hi").pause(2000).type(", my name is Via").pause(250).delete(1).type("atl").pause(250).delete(3).type("taliy.")
            .break().pause(300)
            .type("Sometimes I dei").delete(1).type("sgn").move(-2).type("i").move(2).type(" and develop some stuff.")
            .pause(700).break().type("Let me show You...")
            .go()
    }

    handleClick() {
        this.state.typeItInstance.destroy()
        $("#work-main-type-it").text("")

        let strings = [
            "111",
            "222",
            "333"
        ]

        let next = this.state.curEl === strings.length - 1 ?
            0 : this.state.curEl + 1

        let instance = new TypeIt("#work-main-type-it", {
            strings: strings[this.state.curEl],
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })

        this.setState({
            curEl: next
        })

        this.state.typeItInstance = instance
        instance.go()
    }

    render() {
        return (
            <div id="work-main" className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <p id="work-main-type-it" className="text-center"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end align-items-end">
                        <div className="buttons">
                            <button onClick={this.handleClick} className="mx-5">prev</button>
                            <button onClick={this.handleClick} className="mx-5">next</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default WorkMain