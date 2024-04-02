const express = require('express');
const server = express();


// middleware
// this is application level middleware
server.use((req, res, next) => {
    console.log("Middleware: ");  
    // can be used as logger middleware
    console.log(req.method, req.ip, req.hostname, req.get("User-Agent"));
    next(); 
})  


// experimenting with get, put, post requests
// API - Endpoint - Route
server.get('/', (req, res) => {
    console.log("get requeest")
    res.json({type: "GET"});
})


server.post('/', (req, res) => {
    res.json({type: "POST"})
})

server.put('/', (req, res) => {
    res.json({type: "PUT"})
})

server.delete('/', (req, res) => {
    res.json({type: "DELETE"})
})

server.patch('/', (req, res) => {
    res.json({type: "PATCH"})
})





server.listen(8000, () => {
    console.log("Server started at port 8000");
})