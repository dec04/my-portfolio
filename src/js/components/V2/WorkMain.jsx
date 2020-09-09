import React from "react"
import TypeIt from "typeit/dist/typeit.min"
import GasImg1 from "@img/patterns/gas.jpg"
import GasImg2 from "@img/patterns/gas2.jpg"
import GasImg3 from "@img/patterns/gas3.jpg"
import GasImg4 from "@img/patterns/gas4.jpg"
import MobileImg1 from "@img/patterns/mobile.jpg"
import MobileImg2 from "@img/patterns/mobile2.jpg"
import MobileImg3 from "@img/patterns/mobile3.jpg"
import MobileImg4 from "@img/patterns/mobile4.jpg"

class WorkMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            appNameInstance: null,
            appDescInstance: null,
            curEl: 0,
            strings: [
                {
                    name: "altaygaz22.ru | sibgaz.ru/gaz/",
                    description: [
                        "Web application for order gas balloons at home",
                        "Only for abonents akgs.ru and sibgaz.ru company"
                    ],
                    image: [
                        GasImg1,
                        GasImg2,
                        GasImg3,
                        GasImg4
                    ]
                },
                {
                    name: "Gas balloon android app",
                    description: [
                        "Android application for order gas balloons",
                        "It's mobile version of",
                        "altaygaz22.ru and sibgaz.ru/gaz/ web application"
                    ],
                    image: [
                        MobileImg1,
                        MobileImg2,
                        MobileImg3,
                        MobileImg4
                    ]
                },
            ]
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.state.appNameInstance = new TypeIt("#work-main-type-it-app-name", {
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

    handleClick(math) {
        this.state.appNameInstance.destroy()
        if (!!this.state.appDescInstance)
            this.state.appDescInstance.destroy()
        $("#work-main-type-it-app-name").text("")
        $("#work-main-type-it-app-description").text("")

        let next = math === "inc" ? this.state.curEl + 1 : this.state.curEl - 1

        if (next < 0)
            next = this.state.strings.length - 1
        else if (next > this.state.strings.length - 1)
            next = 0

        this.setState({
            curEl: next
        })

        let appName = new TypeIt("#work-main-type-it-app-name", {
            speed: 20,
            strings: this.state.strings[next].name,
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
        let appDesc = new TypeIt("#work-main-type-it-app-description", {
            speed: 20,
            strings: this.state.strings[next].description,
            afterComplete: function (step, instance) {
                instance.destroy();
            }
        })
        this.state.appNameInstance = appName
        this.state.appDescInstance = appDesc
        appName.go()
        appDesc.go()
        this.props.bgHandle(this.state.strings[next].image[_.random(0, 3)])
    }

    render() {
        return (
            <div id="work-main" className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <p id="work-main-type-it-app-name" className="text-center"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p id="work-main-type-it-app-description"></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end align-items-end">
                        <div className="buttons">
                            <button onClick={() => {
                                this.handleClick("dec")
                            }} className="mx-3"><i
                                className="fas fa-long-arrow-alt-left"> </i> prev
                            </button>
                            <button onClick={() => {
                                this.handleClick("inc")
                            }} className="mx-3">next <i
                                className="fas fa-long-arrow-alt-right"> </i></button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default WorkMain