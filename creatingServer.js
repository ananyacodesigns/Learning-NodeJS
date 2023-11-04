/* const http = require('http'); */
//used to made server: http. 
// best third party modules for nodejs: express.js , async, mocha etc :  code written by someone else that we can use
//npm install package name "-g" helps us install the package for the entire system
//making a server
//req ,res will also suffice, next is not needed until we make database connection

const PORT = 2000;
const hostname= "localhost";
const server= createServer((_request,response,_next)=>{ 
    if(request.url==="/about"){
    response.end("<h1>hello world</h1>");}
});

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`)
});
