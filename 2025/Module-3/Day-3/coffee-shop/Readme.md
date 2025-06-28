## Steps to make route

1. Figure out if the action needs to be done on the server or client
    - Server -> Authentication (login, user mgmt), Interacting with Database, heavy computations, APIs (sensative)
    - Client -> Manipulating the DOM, Getting user location, APIs (non-sensative)

2. If need to interact with server
 - in client side js, define a function with a fetch method to hit a route on your server
 - make sure to invoke this function at the desired location (button click, onload, etc)
 
3. In the server
 - define route that matches the url from your fetch method
 - do whatever it is your need to do server side and return something to your client


 example fetch
  - notice the async/await syntax
  - the route on your server needs to match /getMenu

  - GET HTTP method

    async function getMenuFromServer(){
        const response = await fetch('http://localhost:3000/getMenu')
        console.log('response', response)
        if(response.status != 200){
            console.error('response error')
            return; 
        }

        let data = await response.json();
        console.log('data', data)

    }

  - POST HTTP method

  async function handleLogin2(event){

    const response = await fetch('http://localhost:3000/login', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // tell the server we're sending JSON
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    console.log('response', response)
        if(response.status != 200){
            console.error('response error')
            return; 
        }

        let data = await response.json();
        console.log('data', data)

  }

example server routes
 - notice the app.get in the /getMenu route
  - GET is the HTTP method we are using
 - we can receive a request object from our fetch.  this is req.
 - we will return a response.  this is res.

    app.get('/getMenu', (req, res) => {
        console.log('gn2 /getMenu')
        // reach out to the db to get the menu
        res.json(menu)
    })

 - notice the app.post in the /login route
  - POST is the HTTP method we are using 
  - since this is a POST, it means we can pass some data along in the request body (req.body)
  
    app.post('/login', (req, res) => {
        console.log('gn2 /login', req.body)
        // check user login
        // res.json(menu)
    })









    make a contact form that submits user first name, last name, email, and message to server and stores in contact form array



    TODO: 

    finish setting up app to work with supabase db and authentication


    supabase account 
    brigsby9974@gmail.com
    BigRig11223344!

    need to install
    npm install dotenv @supabase/supabase-js uuid