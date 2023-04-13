// Dependencies
const express = require('express');

// Module scaffolding
const app = express();
/*
For environment variables like ports, database connection strings etc. it is recommended to use .env file. To use .env file:
    1. Create a .env file and add the variable like this: 'PORT=5000' (witout qoutes).
    2. Install the dotenv package using the following command: 'yarn add --dev dotenv' (without qoutes).
    3. Write the following code in the top of your file
            const dotnev = require('dotenv');
            dotenv.config();
    4. Finally, access the variable by writing this in your code: process.env.PORT
For simplicity, I have not included this dependency by default.
*/
const port = 5000;

// Creating a default router for our app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Listening on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

/*
If everything works fine, you should see "Hello World" at the address: http://localhost:5000/
and "Listening on port 5000" logged in your terminal.
*/
