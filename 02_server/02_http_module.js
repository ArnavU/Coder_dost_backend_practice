const http = require('http');

const data = {age: 5};

const server = http.createServer((req, res) => {
    console.log("Request made");

    console.log(req.url)
    res.setHeader("Dummy", "DummyValue");
    res.setHeader("Content-Type", 'application/json');
    res.end(JSON.stringify(data));
})

server.listen(9000);