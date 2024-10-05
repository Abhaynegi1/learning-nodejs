const http = require("http");  // mostly used for http methods and req & res
const fs = require("fs");  //used for file management 
const url = require("url");  // I used it for the url dom

const myServer = http.createServer((req, res) => {  //req == requesting form server res : responding to the user 
    const myurl = url.parse(req.url, true);
    const log = `${Date.now()} : New Req received with url : ${myurl.pathname}\n`;

    fs.appendFile("log.txt", log, (err) => {  //fs method to append a file 
        if (err) {
            console.error("Error writing to log file", err);
        }

        switch(myurl.pathname) {  //Basic url dom {mostly done using express}
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("My name is Abhay");
                break;
            case "/search" : 
                const search = myurl.query.search_query;
                res.end(`You searched for ${search}`);
            case "/signup" :                //Using http methods to visulize forms
                if(req.method === "GET") res.end("This is a signup form");
                else if(req.method === "POST") {
                    //DB queries 
                    res.end("Success");
                }
                break ;
            default:
                res.end("404 NOT found");
        }
    });
});

myServer.listen(8000, () => {  //if 8000 port is availible and the sever is started mostly used for the developer to check if the server is working or
    console.log("server working");
});
