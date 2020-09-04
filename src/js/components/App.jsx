import React from "react"
import CircleImage from "@/js/components/CircleImage.jsx"
import Logo from "@img/Logo/WithoutName/logo_transparent_crop.png"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.MainBackground = this.MainBackground.bind(this)
    }

    MainBackground() {
        return <div>
            <div className="background-img">
                <this.Header/>
            </div>
        </div>
    }

    Header() {
        return <div className="header py-5 d-flex justify-content-center align-items-center">
            <CircleImage img={Logo}/>
        </div>
    }

    render() {
        return (
            <this.MainBackground/>
        )
    }
}

export default App