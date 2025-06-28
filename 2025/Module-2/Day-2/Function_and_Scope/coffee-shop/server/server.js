const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//menu
const menu = [
    {
        name: 'Americano', 
        price: 2.5, 
        type: 'hot',
    },
    {name: 'Latte', price: 3.0, type: 'hot'},
    {name: 'Cappuccino', price: 3.5, type: 'hot'},
    {name: 'Frozen Americano', price: 4.5, type: 'cold'},
    {name: 'Frozen Latte', price: 2.5, type: 'cold'},
    {name: 'Pup Cup', price: 0, type: 'cold'},
];

//user
const user = { username: 'bryan', password: 'password123' };



app.get('/', (req, res) => {
    console.log('hitting / route')
  res.send('Hello World')
})

app.get('/getMenu', (req, res) => {
    console.log('gn2 /getMenu')
    // reach out to the db to get the menu
    res.json(menu)
})

app.post('/login', (req, res) => {
    console.log('gn2 /login', req.body)
    // check user login
    // res.json(menu)
})


app.listen(3000)




