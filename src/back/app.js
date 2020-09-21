import express from "express"
const path = require("path")
const app = express()
const port = 8000

//region Config
// add folder "app" to use in path http://sitename/app/**/*
app.use("/public", express.static(__dirname + "/public"))
app.use("/", express.static(__dirname + "/"))

app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
//endregion

// General
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

// Routes
app.get("/work/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/views/work.html"))
})

app.get("/work/:id", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/views/work.html"), {workId: req.params.id})
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