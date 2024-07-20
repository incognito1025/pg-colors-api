// app.js
// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const colorsController = require("./controllers/colorsController.js");




// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES //landing page
app.get("/", (req, res) => {
  res.send("Welcome to Colors App");
});

// Colors ROUTES - when we use localhost:3003/colors, go ot colorsController and run code from there
app.use("/colors", colorsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});


// EXPORT
module.exports = app;







/*
1. Thought question - Why is it essential to add and commit after setting up the .gitignore and not before?

2. Follow-up question - How would you fix adding and committing folders and files (like node_modules) you did not mean to add?

Review Questions:

3. What did the above steps do? Try to put it in your own words. It's essential to learn to talk about code.

4. What are acceptable port numbers?


// app.js
// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Colors App");
});

// EXPORT
module.exports = app;

Review Questions:
5. What does this file and setup do?
/////////////



// server.js
// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

6. What do this file and setup do?

7. What is middleware?

8. What does app.use(cors()) do?
9. What does app.use(express.json()) set up?
10. What does app.get() do?
11. What is req short for?
12. What is res short for?
13. What is module.exports? What does it do?

Review Questions:

What URL must one go to to see this message?
Why doesn't it work yet?
Why don't you see a 404 message, either?


Why did you name your route /colors? Is there a reason you name your route(s) this way?

What would happen if you put this code ABOVE the middleware setup?
*/