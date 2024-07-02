const http = require('http');

// Create HTTP server
http.createServer(function (req, res) {
    // Set up routing
    if (req.url === '/') {
        // Respond with a simple HTML page for the root route
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>Welcome to the Home Page</h1></body></html>');
        res.end();
    } else if (req.url === '/api') {
        // Respond with a JSON object containing a greeting message for the /api route
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Hello, this is the API route!' }));
        res.end();
    } else {
        // Respond with a 404 error message for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found invalid url');
        res.end();
    }
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
