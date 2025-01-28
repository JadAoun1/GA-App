// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); //loads env variables
const port = process.env.PORT;


// MIDDLEWARE
mongoose.connect(process.env.MONGODB_URI) // database connection



// Connection Status in Terminal
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


// Import Fruit Model!
const Fruit = require("./models/fruit.js")

app.use(express.urlencoded({extended:false}));


// ROUTES
// GET/TEST ROUTE
// app.get("/", async (req, res) => {
//     res.send("HELLO WORLD!")
// });

//INDEX
app.get("/", async (req, res) => {
    res.render("index.ejs")
});

// NEW
app.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs")
})

// D.
// U.


// CREATE
app.post("/fruits", async (req, res) =>{
    console.log(req.body);
    res.redirect("/fruits/new")
})

// E.
// S.



// PORT - One of 3 ways to use the port variable
app.listen(port, () => {
    console.log(`Listening on port: `, port)
});