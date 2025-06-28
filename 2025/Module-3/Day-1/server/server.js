const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    console.log('gn2 / route')
    res.send('Hello, world!');
});

app.get('/tacobell', (req, res) => {
    res.send('Hello, tacobell!');
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});