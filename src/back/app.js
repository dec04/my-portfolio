const express = require("express")
const path = require("path")
const app = express()
const port = 8000

// add folder "app" to use in path http://sitename/app/**/*
app.use("/public", express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/views/index.html"))
})

app.listen(port, () => {
    console.log("App start on port 8000")
})