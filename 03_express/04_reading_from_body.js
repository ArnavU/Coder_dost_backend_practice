const express = require('express');
const server = express();

// built in middleware
server.use(express.json());
// server.use(express.urlencoded());

// middleware
// this is application level middleware
server.use((req, res, next) => {
    console.log("Middleware: ");
    // can be used as logger middleware
    console.log(req.method, req.ip, req.hostname, req.get("User-Agent"));
    next(); 
})  


// route level middleware
const auth = (req, res, next) => {
    // console.log(req.query);

    console.log("body: ", req.body)

    // reading query 
    if(req.body.password == "123") {
        next();
    }
    else {
        res.sendStatus(401);
    }
}


// experimenting with get, put, post requests
// API - Endpoint - Route
server.get('/', auth, (req, res) => {
    console.log("get requeest")
    res.json({type: "GET"});
})


server.post('/', auth, (req, res) => {
    res.json({type: "POST"})
})

server.put('/', auth, (req, res) => {
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