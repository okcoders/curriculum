const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config(); 
const supabase = require('./db')

const app = express()
app.use(cors())


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    console.log('hitting / route')
  res.send('Hello World')
})

app.get('/getMenu', async (req, res) => {
    const { data: menu, error } = await supabase
    .from('menu')
    .select()

    if (error) {
        console.error('error', error)
        return res.status(500).json({ error: error.message })
    }

    console.log('menu', menu)
    console.error('error', error)
    res.json(menu)
})

app.post('/login', async (req, res) => {
    console.log('gn2 /login', req.body)

    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.username,
        password: req.body.password
    });

    if (error) {
        console.error('Signin error', error);
        return res.status(401).json({ error: error.message });
    }

    res.status(200).json({message: 'Success'})
})

app.post('/checkout', async (req, res) => {
    console.log('gn2 /checkout', req.body)

    if(!req.body || req.body.length < 1){
        res.status(400).json({ message: "At least one item required for order" });
    }

    const order = req.body;
    console.log('order', order)

    const confirmationNumber = uuidv4();

    const { data, error } = await supabase
        .from('orders')
        .insert([
            { 
                order_details: order,
                confirmation_number: confirmationNumber
             }
          ])

        if (error) {
            console.error('error', error)
            return res.status(500).json({ error: error.message })
        }


    res.status(200).json({message: "Order Process Successfully", confirmationNumber: confirmationNumber})

})

app.post('/contactForm', async (req, res) => {
    console.log('gn2 /contactForm', req.body)

    if(!req.body || req.body.length < 1){
        res.status(400).json({ message: "Error submitting contact form. Ensure all fields are complete." });
    }

    const messageObj = req.body;
    console.log('messageObj', messageObj)

    const { data, error } = await supabase
        .from('contact_form_messages')
        .insert([
            { 
                first_name: messageObj.firstName,
                last_name: messageObj.lastName,
                email: messageObj.email,
                comment: messageObj.comment,
             }
          ])

        if (error) {
            console.error('error', error)
            return res.status(500).json({ error: error.message })
        }


    res.status(200).json({message: "Message Received Successfully"})

})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})




