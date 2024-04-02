const fs = require('fs');
const http = require('http');

const data = fs.readFileSync('./data.json', 'utf-8');

const server = http.createServer((req, res) => {
    console.log("Request made");
    console.log("Req url: ", req.url);
    let index = fs.readFileSync('./index.html', 'utf-8');

    let modifiedData = "";
    let user = "";
    let id = "";

    switch(req.url) {
        case('/user/1'): 
            res.setHeader('Content-Type', 'text/html');
            modifiedData = JSON.parse(data);

            id = req.url.split('/')[2];
            console.log("ID: ", id) 
            console.log(req.url.split('/'));
            user = modifiedData.find(user => user.id === (+id));
            console.log(user)

            index = index.replace('***name***', user.name)
                .replace('***message***', user.message); 
            res.end(index);
            break;
        case('/user/2'): 
            res.setHeader('Content-Type', 'text/html');
            modifiedData = JSON.parse(data);

            id = req.url.split('/')[2];
            console.log(req.url.split('/'));
            user = modifiedData.find(user => user.id === (+id));

            index = index.replace('***name***', user.name)
                .replace('***message***', user.message);
            res.end(index);
            break;
        case('/api'):
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
            break;
        default:
            res.writeHead(404, "Nt Found");
            res.end('404');
    }

    // res.setHeader('Content-Type', 'text/html');
   
})

server.listen(8000)