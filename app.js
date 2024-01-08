const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if (error) {
            // if file not found, response with 404
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            // data is the data in the html file
            res.write(data)
        }
        res.end()
    })
    });

server.listen(port, (error) => {
    if ((error)) {
        console.log('Something went wrong', error)
    }
    console.log(`Server running at port ${port}`);
    }
);

// Path: package.json

