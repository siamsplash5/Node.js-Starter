// Dependencies
const express = require('express');

// Module scaffolding
const app = express();
const port = 5000;

/*
For environment variables like ports, database connection strings, and other sensitive data,
1. Install the dotenv package using the following command: yarn add dotenv
2. Create a .env file and add the variable like this: PORT=5000
3. Access the variable by writing this in your code: process.env.PORT
For simplicity, we have not included these dependencies by default.
*/

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
