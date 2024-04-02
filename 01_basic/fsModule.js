const fs = require('fs');

const t1 = performance.now();
const txt = fs.readFileSync('test.txt', 'utf-8')

console.log(txt);
const t2 = performance.now();

const t3 = performance.now();
fs.readFile('test.txt', 'utf-8', (err,  data) => {
    console.log(data); 
    // this will print at last (asynchronous)
})
const t4 = performance.now();

console.log("Hello World")

console.log(t2-t1, t4-t3)