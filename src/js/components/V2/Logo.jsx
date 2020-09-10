import React from "react"
import LogoImg from "@img/Logo/WithoutName/logo_transparent_crop.png"

class Logo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="logo"
                 data-hoverable="Reload"
                 className="hoverable">
                <img src={LogoImg} alt={LogoImg}/>
            </div>
        )
    }
}

export default Logo