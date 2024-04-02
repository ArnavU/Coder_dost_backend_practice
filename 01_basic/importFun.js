// const funs = require('./exportFun.js');
const {sum , diff} = require('./exportFun.js').lib;

// console.log(funs.sum(1, 2));
// console.log(funs.diff(2, 3));

console.log(sum(1, 2));
console.log(diff(2, 3));

/*
    to use ejs module import export
    do 
        create a package.json file and write the command
        {
            type: "module"
        }
*/

