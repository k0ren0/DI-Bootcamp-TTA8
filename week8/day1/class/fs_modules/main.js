/** Module System
 * 1. Made module
 * 2. Core / Built in
 * NPM - Node Package Manager
 */

// const { greating } = require("./modules/greeting.js");
// const { name } = require("./modules/person.js");

// console.log(greating, name);

// PROMISES

// const fs = require("fs").promises;
// const path = require("path");

// const read = async() => {
//     const data = await fs.readFile('info.txt', 'utf-8');
//     console.log(data);
// }

// read()

const fs = require("fs");
const path = require("path");


// SYNC and ASYNC

// // // v1 

// try {
//     const data = fs.readFileSync("info.txt", "utf-8")

//     console.log (data);
// } catch (error) {
//     console.log(error.message);
// }

// // // v2
// const info = fs.readFile("info.txt", "utf-8", (err, data) => {
//     if(err) return console.log(err.message)
//     console.log(data);
// })



// let data = "3123123123"

// fs.writeFile("newfile.txt", data, "utf-8", (err) => {
//     if (err) return console.log(err);
//     console.log("File created");
// })

// fs.appendFile('newfile.txt' ,data, 'utf-8', err => {
//     if(err) return console. log(err.message);
// });

fs.copyFile('info.txt', 'newfile999.txt', err => {
    if (err) return console.log(err);
    console.log('File copied successfully!');
});

// fs.mkdir("utils", (err)=>{

// })

