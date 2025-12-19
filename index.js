const http = require("http");

http.createServer((req, res) =>{
    res.end("Hello Vuthy I'm DevOps Engineer.")
}).listen(3000);

console.log("Server running on port 3000");
