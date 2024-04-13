const express = require('express');
const path = require('path');
const app = express();
// const data = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3080, () => {
  console.log("Server successfully running on port 3080");
});
