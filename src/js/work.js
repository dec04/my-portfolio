import ReactDOM from "react-dom";
import SsrTest from "@/js/components/V2/SsrTest.jsx";
import React from "react";

ReactDOM.hydrate(
    <SsrTest workId={window["work"]["pageId"]}/>,
    document.getElementById("work-main-container")
)
