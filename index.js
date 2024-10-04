const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
    const myurl = url.parse(req.url , true);
    console.log(myurl);
    const log = `${Date.now()} : New Req received \n`;
    fs.appendFile("log.txt" , log , (err ,dat) => {
        res.end(`Your joining time is ${Date.now()} `);
    })
    
} )

myServer.listen(8000 , ()=> {console.log("server working ");});