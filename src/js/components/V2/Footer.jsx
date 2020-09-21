import React from "react"
import {paraisoDark} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import SyntaxHighlighter from "react-syntax-highlighter"
import Parallax from "parallax-js"
import Logo from "@img/Logo/WithoutName/logo_transparent_crop.png"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let footerEmailScene = new Parallax(document.getElementById("email-scene"))
        let footerHighlighterScene = new Parallax(document.getElementById("highlight-code"))
        let socialButtonsScene = new Parallax(document.getElementById("social-buttons"))
        let copyrightInfo = new Parallax(document.getElementById("copyright-info"))
        document.querySelectorAll(".work-links").forEach(el => {
            let workLinks = new Parallax(el)
            workLinks.setInputElement(document.getElementById("footer-wrapper"))
        })
        footerEmailScene.setInputElement(document.getElementById("footer-wrapper"))
        footerHighlighterScene.setInputElement(document.getElementById("footer-wrapper"))
        socialButtonsScene.setInputElement(document.getElementById("footer-wrapper"))
        copyrightInfo.setInputElement(document.getElementById("footer-wrapper"))
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
            "··function workExperience() {\n" +
            "····return [\n" +
            "······{ '2019-now' : 'Full-stack Developer/Android developer' },\n" +
            "······{ '2010-2018' : 'System Administrator/Security chief' }\n" +
            "····]\n" +
            "··}\n" +
            "··function education() {\n" +
            "····return [\n" +
            "······{ '2018': 'Siberian State University of\n" +
            "········ Telecommunications and Informatics' },\n" +
            "······{ '2010': 'Gorno-Altaysk Economic College' },\n" +
            "····]\n" +
            "··}\n" +
            "··function skills() {\n" +
            "····return [\n" +
            "........'HTML/CSS/JS', 'ReactJS', 'Node.js', 'jQuery', 'Bootstrap',\n" +
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
                         className="col-12 col-md-10 offset-md-1 p-5">
                        <div className="row">
                            <div id="email-scene"
                                 data-pointer-events="true"
                                 data-hover-only="true"
                                 data-relative-input="true"
                                 className="col">
                                <a href="mailto:dmedia.decoy@gmail.com"
                                   data-depth=".03">
                                    <h1 id="email"
                                        className="hoverable footer-big-header"
                                        data-hoverable="mailto:"><span>dmedia.decoy</span>@gmail.com</h1>
                                </a>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div id="about"
                                 className="col-12 col-xl-7">
                                <h3 className="footer-small-header">About</h3>
                                <div className="divider"> </div>
                                <div id="highlight-code">
                                    <SyntaxHighlighter
                                        data-depth=".015"
                                        language="javascript"
                                        wrapLines="true"
                                        style={paraisoDark}>
                                        {skillsSectionCode}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div id="works"
                                 className="col-12 col-xl-4 text-right">
                                <h3 className="footer-small-header">Works</h3>
                                <div className="divider"> </div>
                                <div className="work-links works-link-wrapper"
                                     data-pointer-events="true"
                                     data-hover-only="true"
                                     data-relative-input="true">
                                    <a data-depth=".06"
                                       href="https://altaygaz22.ru"
                                       className="hoverable"
                                       data-hoverable="link  &rarr;">
                                        Site altaygaz22.ru</a>
                                </div>
                                <div className="work-links works-link-wrapper"
                                     data-pointer-events="true"
                                     data-hover-only="true"
                                     data-relative-input="true">
                                    <a data-depth=".06"
                                       href="https://sibgaz.ru/gaz/"
                                       className="hoverable"
                                       data-hoverable="link  &rarr;">
                                        Site sibgaz.ru/gas/</a>
                                </div>
                                <div className="work-links works-link-wrapper"
                                     data-pointer-events="true"
                                     data-hover-only="true"
                                     data-relative-input="true">
                                    <a data-depth=".06"
                                       href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.a"
                                       className="hoverable"
                                       data-hoverable="link  &rarr;">
                                        Android app for altaygaz22.ru</a>
                                </div>
                                <div className="work-links works-link-wrapper"
                                     data-pointer-events="true"
                                     data-hover-only="true"
                                     data-relative-input="true">
                                    <a data-depth=".06"
                                       href="https://play.google.com/store/apps/details?id=com.decoy.gasbaloonapp.n"
                                       className="hoverable"
                                       data-hoverable="link  &rarr;">
                                        Android app for sibgaz.ru/gaz</a>
                                </div>
                                <div className="work-links works-link-wrapper"
                                     data-pointer-events="true"
                                     data-hover-only="true"
                                     data-relative-input="true">
                                    <a data-depth=".06"
                                       href="#"
                                       className="hoverable"
                                       data-hoverable="link  &rarr;">
                                        Reworking akgs.ru</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="copyright" className="col">
                                <div className="row d-flex justify-content-between">
                                    <div className="divider"> </div>
                                    <div className="col-12 order-2 order-lg-1 col-lg-6">
                                        <div id="copyright-info"
                                             data-pointer-events="true"
                                             data-hover-only="true"
                                             data-relative-input="true"
                                             className="small-logo">
                                            <img src={Logo} alt={Logo} data-depth=".035" />
                                            <p data-depth=".035" >2020. Developed dec04.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 order-1 order-lg-2 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                                        <div id="social-buttons"
                                             data-pointer-events="true"
                                             data-hover-only="true"
                                             data-relative-input="true">
                                            <div data-depth=".038">
                                                <div id="github-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                                <div id="facebook-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                                <div id="twitter-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                                <div id="instagram-social" className="social-icon-wrapper hoverable" data-hoverable="link &rarr;"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer