const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : New Req received \n`;
    fs.appendFile("log.txt" , log , (err ,dat) => {
        res.end(`Your joining time is ${Date.now()} `);
    })
    
} )

myServer.listen(8000 , ()=> {console.log("server working ");});