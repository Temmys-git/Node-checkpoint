const fs = require('fs');

// Create welcome.txt and write "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt has been created and data written!');
});

// Read and console.log data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
