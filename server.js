// Import necessary packages
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    let location = req.query.location;
    let expression = req.query.expression;

    // Render location and expression info to the EJS template:
    res.render('index', {location: location, expression: expression});
});

// Listen on port 3000, can be any port
app.listen(3000, () => {
  console.log("Server started on port 3000.");
});