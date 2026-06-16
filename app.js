const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Simple Node.js App</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>This is a minimal web server running on ${hostname}:${port}.</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
