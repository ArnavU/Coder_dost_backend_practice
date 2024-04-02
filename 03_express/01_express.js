const express = require("express");
const server = express();
const path = require("path");
const fs = require('fs');


server.get('/', (req, res) => {
    res.send("Hello World!");
})

server.get('/file', (req, res) => {
    console.log(path.join(__dirname, 'demo.html'));
    res.sendFile(path.join(__dirname, 'demo.html'));
})

server.get('/jsonData', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, '../02_server/data.json'), 'utf-8');
    const modifiedData = JSON.parse(data);
    res.json(modifiedData);
})

server.get('/notFound', (req, res) => {
    res.sendStatus(404);
})


server.listen(8000, () => {
    console.log("Server started at port No. 8000");
})
