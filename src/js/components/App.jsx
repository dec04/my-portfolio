import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import {paraisoDark} from "react-syntax-highlighter/dist/esm/styles/hljs"
import Logo from "@img/Logo/WithoutName/logo_transparent_crop.png"
import CircleImage from "@/js/components/CircleImage.jsx"
import RoadmapSection from "@/js/components/RoadmapSection.jsx"
import TypeIt from "typeit/dist/typeit.min"
import * as GeoPattern from "geopattern"
import _ from "lodash"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            curBackground: GeoPattern.generate("dec04", {color: "#000"}).toDataUrl()
        }

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.Main = this.Main.bind(this)
    }

    componentDidMount() {
        new TypeIt("#aboutSectionContent")
            .delete(1)
            .pause(1500)
            .type("Hi").pause(2000).type(", my name is Via").pause(250).delete(1).type("atl").pause(250).delete(3).type("taly.")
            .break().pause(300)
            .type("Sometimes I dei").delete(1).type("sgn").move(-2).type("i").move(2).type(" and develop some stuff.")
            .pause(700).break().type("Let me show You...")
            .go()
    }

    handleMouseOver() {
        this.setState({
            curBackground: GeoPattern.generate(_.random(1000).toString(), {color: "#000"}).toDataUrl()
        })
    }

    Main() {
        //region skillsSectionCode
        const skillsSectionCode =
            "class Vitaly Sokolov {\n" +
            "··// I'm ambitious and love new challenges :)\n" +
            "··// My vast variety of skills is continuously expanding.\n" +
            "··constructor() {\n" +
            "····this.name = 'Vitaly Sokolov'\n" +
            "····this.dayOfBirthTimestamp = 651117600\n" +
            "····this.email = 'dmedia.decoy@gmail.com'\n" +
            "··}\n" +
            "··workExperience() {\n" +
            "····return [\n" +
            "······{ '2019-now' : 'Full-stack Developer/Android developer' },\n" +
            "······{ '2010-2018' : 'System Administrator/Security chief' }\n" +
            "····]\n" +
            "··}\n" +
            "··education() {\n" +
            "····return [\n" +
            "······{ '2018': 'Siberian State University of Telecommunications and Informatics' },\n" +
            "······{ '2010': 'Gorno-Altaysk Economic College' },\n" +
            "····]\n" +
            "··}\n" +
            "··skills() {\n" +
            "····return [\n" +
            "........'HTML/CSS/JS',\n" +
            "........'React',\n" +
            "........'Node.js',\n" +
            "........'jQuery',\n" +
            "........'Bootstrap',\n" +
            "........'Sass',\n" +
            "........'Express',\n" +
            "........'PHP',\n" +
            "........'MySql/SqLite/Postgres',\n" +
            "........'GIT',\n" +
            "........'Webpack',\n" +
            "........'Java (Android)',\n" +
            "........'Jetpack Room',\n" +
            "........'Linux'\n" +
            ".... ]\n" +
            "··}\n" +
            "}\n"
        //endregion

        return <div>
            <div className="main pb-5">
                <this.Header/>
                <div className="container">
                    <RoadmapSection
                        scroll={true}>
                        <h1>About</h1>
                        <hr/>
                        <p id="aboutSectionContent"></p>
                    </RoadmapSection>
                </div>
                <div className="container-fluid">
                    <div className="work-bg"
                         style={{
                             backgroundImage: `${this.state.curBackground}`
                         }}
                         onMouseEnter={this.handleMouseOver}
                    >
                        <div className="container">
                            <RoadmapSection>
                                <h1>Work</h1>
                            </RoadmapSection>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <RoadmapSection>
                        <h1>Skills</h1>
                        <SyntaxHighlighter
                            language="javascript"
                            style={paraisoDark}>
                            {skillsSectionCode}
                        </SyntaxHighlighter>
                    </RoadmapSection>
                </div>
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
            <this.Main/>
        )
    }
}

export default App