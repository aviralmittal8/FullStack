const http = require('http');
const PORT = 2527;
const server = http.createServer((req, res) => {
    console.log("Inside the server")
    res.setHeader('content-type', "text/html");
    res.write("<h2 style ='color:cyan; background-color:yellow'> Welcome to Node Server </h2>");
    res.end("<h2> Server has ended </h2>");

})

server.listen(PORT, () => {
    console.log("Server is running on:" + PORT);
})