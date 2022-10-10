const http = require('http');
const fs = require('fs');

let index = fs.readFileSync('public/index.html');
let about = fs.readFileSync('public/about.html');
let contact = fs.readFileSync('public/contact.html');
const server = http.createServer(function (req, res) {
    if(req.url === '/' || req.url === '/home') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(about);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(contact);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Page not found!');
        res.end();
    }
  })
  
  server.listen(8888,()=>{
    console.log('listening on port 8888');
  });