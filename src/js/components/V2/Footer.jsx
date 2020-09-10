import React from "react"
import {paraisoDark} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
            "........'HTML/CSS/JS', 'React', 'Node.js', 'jQuery', 'Bootstrap',\n" +
            "........'Sass', 'Express', 'PHP', 'MySql/SqLite/Postgres', 'GIT',\n" +
            "........'Webpack', 'Java (Android)', 'Jetpack Room', 'Linux'\n" +
            ".... ]\n" +
            "··}\n" +
            "}\n"
        //endregion

        return (
            <div
                style={{backgroundImage: `${this.props.img}`}}
                className="container-fluid">
                <div id="footer-wrapper" className="row">
                    <div id="footer"
                         className="col-10 offset-1 p-5">
                        <a href="mailto:dmedia.decoy@gmail.com">
                            <h1 id="email"
                                className="hoverable footer-big-header"
                                data-hoverable="mailto:"><span>dmedia.decoy</span>@gmail.com</h1>
                        </a>
                        <div className="row d-flex justify-content-between">
                            <div id="about" className="col-8">
                                <h3 className="footer-small-header">About</h3>
                                <div className="divider"> </div>
                                <div id="highlight-code">
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={paraisoDark}>
                                        {skillsSectionCode}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div id="works" className="col-3 text-right">
                                <h3 className="footer-small-header">Works</h3>
                                <div className="divider"> </div>
                                <div className="works-link-wrapper">
                                    <a href="#" className="hoverable" data-hoverable="link  &rarr;">link 1</a>
                                </div>
                                <div className="works-link-wrapper mb-5">
                                    <a href="#" className="hoverable" data-hoverable="link  &rarr;">link 2</a>
                                </div>
                                <h3 className="mt-5 footer-small-header">Contacts</h3>
                                <div className="divider"> </div>
                                <div id="github-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                <div id="facebook-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                <div id="twitter-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                <div id="instagram-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer