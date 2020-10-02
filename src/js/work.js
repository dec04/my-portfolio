import ReactDOM from "react-dom"
import React from "react"
import WorkPage from "@/js/components/V2/WorkPage.jsx"

const container = document.getElementById("work-main-container")

if (!!container)
ReactDOM.hydrate(
    <WorkPage workId={!!window["work"] ? window["work"]["pageId"] : ""}/>,
    container
)
