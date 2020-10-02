import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"
import ejs from "ejs"
import {readFile as _readFile} from "fs"
import {promisify} from "util"
import WorkPage from "@/js/components/V2/WorkPage.jsx"

const path = require("path")
const app = express()
const port = 8000

// add folder "app" to use in path http://sitename/app/**/*
app.use("/public", express.static(__dirname + "/public"))
app.use("/", express.static(__dirname + "/"))

app.engine("html", ejs.renderFile)
app.set("view engine", "html")

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

app.get("/work/", async (req, res) => {
    // // readFile must return promise instead do callback
    // const readFile = promisify(_readFile)
    // // Get html string from file
    // const template = await readFile(path.join(__dirname + "/public/views/work.html"), "utf-8")
    // // Replace html with ejs variables
    // const html = ejs.render(
    //     template,
    //     {
    //         workMainContainer: ReactDOMServer.renderToStaticMarkup(<SsrTest/>)
    //     },
    //     {
    //         delimiter: "?"
    //     }
    // )
    //
    // res.send(html)

    const workJSX = ReactDOMServer.renderToString(<WorkPage />)
    const readFile = promisify(_readFile)
    await readFile(path.join(__dirname + "/public/views/work.html"), "utf-8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Oops, better luck next time!");
        }

        return res.send(
            data.replace(
                '<div id="work-main-container"></div>',
                `<div id="work-main-container">${workJSX}</div>
                 <script type="text/javascript"></script>`
            )
        );
    })
})

app.get("/work/:id", async (req, res) => {
    const workJSX = ReactDOMServer.renderToString(<WorkPage workId={req.params.id} />)
    const readFile = promisify(_readFile)
    await readFile(path.join(__dirname + "/public/views/work.html"), "utf-8", (err, data) => {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Oops, better luck next time!");
        }

        return res.send(
            data.replace(
                '<div id="work-main-container"></div>',
                `<div id="work-main-container">${workJSX}</div>
                 <script type="text/javascript">
                     window.work = { "pageId": ${req.params.id} }
                 </script>`
            )
        );
    })
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.get("/journal", (req, res) => {
    res.send("journal")
})

app.listen(port, () => {
    console.log("App start on port 8000")
})