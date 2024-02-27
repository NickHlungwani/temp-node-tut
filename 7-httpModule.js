//HTTP
const http = require('http');

//req represents the incoming request
//res is what we sending back
const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end("Welcome to Home page");

}if(req.url ==='/about'){
    res.end('Here  is our short history')
}
res.end(
    '<h1>Opps</h1> <p>We cannot find the page you are looking for</p> '
);

});

server.listen(5000);