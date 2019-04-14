'use strict';

function getIndex (res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Assignmnet</title>');
    res.write('<body>');
    res.write('<h1>Enter User!!</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<label for="user-input">User!!</label>');
    res.write('<input id="user-input" name="user" type="user" />');
    res.write('<button type="submit">Send!</button>')
    res.write('</form>')
    res.write('</body>');
    res.write('</head>');
    res.write('</html>');
    return res.end();
}

function getUsers (res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Assignmnet</title>');
    res.write('<body>');
    res.write('<h1>Users!!</h1>');
    res.write('<ul>');
    res.write('<li>User 1</li>');
    res.write('<li>User 2</li>');
    res.write('<li>User 3</li>');
    res.write('<li>User 4</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</head>');
    res.write('</html>');
    return res.end();
}

function postUser(req, res) {
    const reqBody = [];

    req.on('data', chunk => {
        reqBody.push(chunk);
    });

    req.on('end', () => {
        const stringyBody = Buffer.concat(reqBody).toString();
        const user = stringyBody.split('=')[1];
        console.log('user! ', user);
        
        res.writeHead(302, { 'Location' : '/' });

        return res.end();
    });
}

module.exports = {
    requestHandler (req, res) {
        const url = req.url;
        const method = req.method;

        if (url === '/') {
            getIndex(res);
        } else if (url === '/users') {
            getUsers(res);
        } else if (url === '/create-user' && method === 'POST') {
            postUser(req, res);
        }
    }
}