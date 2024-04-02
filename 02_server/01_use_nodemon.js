// npm i nodemon -D
// npm i express
// nodemon file_name 

const express = require('express');
const server = express();

console.log("Hi")

server.listen(8000, () => {
    console.log("Listening at port 8000")
})