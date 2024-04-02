const express = require("express");
const server = express();

server.use(express.json());
// nodejs will search this public folder inside the directory in which the cli is
// you can also see sample.json on browser ==> localhost:8000/sample.json
// but it should be inside the public folder
server.use(express.static("public"));

server.get("/", (req, res) => {
    res.send("<h1>Hi this is Home page<h1>");
})

server.get("/about", (req, res) => {
    res.send("<h1>Hi this is About page<h1>");
})

server.listen(8000, () => {
    console.log("Listening at port no. 8000");
})