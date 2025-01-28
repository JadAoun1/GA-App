//Import Mongoose 
const mongoose = require("mongoose")

//Create our Schema!
const fruitScheme = new mongoose.Scheme({
    name: String,
    isReadytoEat: Boolean,

});


//Create our Model!
const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;