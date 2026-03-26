//node js has an module that module is known as http module
//import http module
//core module
const http = require('node:http');

//create a server
//creating application which can listen to the request and send response to the client
const server = http.createServer((req, res) => {
    //req is the request object which contains all the information about the request
    //res is the response object which is used to send the response to the client
    

    if(req.url === '/secretData') {
        res.end('This is secret data')
    }


    //whoever coming to server i will send the response as hello world
    res.end('Hello World') //sending the data back to the client
    //replies the the request


})

//server is ready to listen to the request
server.listen(7775)