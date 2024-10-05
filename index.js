const express = require("express"); // Using the Express framework

const app = express();  // Initializing the Express app

// Route for the home page
app.get("/", (req, res) => {
    return res.send("Hello, this is the homepage");
});

// Route for the about page
app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

// Route for search functionality
app.get("/search", (req, res) => {
    const searchQuery = req.query.search_query;
    return res.send(`You searched for: ${searchQuery}`);
});

// Route for signup (GET and POST)
app.get("/signup", (req, res) => {
    return res.send("This is a signup form");
});

app.post("/signup", (req, res) => {
    // Add your database query or signup logic here
    return res.send("Signup Success");
});

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).send("404 NOT found");
});

// Start the server
app.listen(8000, () => {
    console.log("Server is working ");
});
