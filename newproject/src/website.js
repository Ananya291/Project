const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> Hey welcome back</h1><p>bjveaihviahvpaevakfnqerio</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> Hey </h1><p>bjveaihviahvpaevakfnqerio</p>')
    }

    else if(req.url == '/hello'){
        res.statusCode = 200
        const data = fs.readFileSync('./hellooo.html');
        res.end(data.toString());
    }

    else{
        // res.board();
        res.statusCode = 404;
        res.end('<h1> Not found</h1><p> hey this page was not found on this</p>')
    }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});