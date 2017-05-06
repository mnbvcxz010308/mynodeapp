const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=> {
	res.setHeader('Content-Type','text/plain');
	res.statusCode = 200;
	res.end('Hello World, from Node JS !');


});

server.listen(port,host,()=>{
console.log(`Server running at https://${host}:${port}/`);
});
	

