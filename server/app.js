require("dotenv").config();
const express = require('express')

const app = express();



// **************** mongo connect
const mongoose = require("mongoose");

// // The old way
// mongoose
// .connect('mongodb://localhost:27017/T-tours')
// .then(value => console.log('Connect to mongo DB'))
// .catch(err => console.log('Failed to connect with mongo'));

const DB = process.env.DB_LOCAL

async function connectToDatebase() {
try {
    await mongoose.connect(DB);
    console.log('Connect to mongo DB');
} catch (error) {
    console.log('Failed to connect with mongo');
}
}



connectToDatebase();
// **************************************

// const tourSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     rating: Number,
//     premium: Boolean,
// });

// const Tour = mongoose.model("Tour", tourSchema);

// const t = new Tour({name: "The amazing snow", price: 400, rating: 4.5});
// t.save();

// Tour.create({name: "Cold papa", price: 10, rating: 4 });


// async function getAllTours() {
//     const tours = await Tour.find();
//     console.log(tours);
// }

// // getAllTours();


// async function getOnlyPrice() {
//     const tours = await Tour.find({ price: {$lt:300}});
//     console.log(tours);
// }

// // getOnlyPrice();

// async function getById() {
//     const tourById = await Tour.findById("630b799b5a7926df092b4f46");
//     console.log(tourById);
// }

// getById();

// ***********************************************
const Tour = require('./schemas/Tour')

app.get("/", async (req, res)=>{
const tours = await Tour.find()
res.json(tours);
});

app.get("/byName/:name", async(req, res) =>{
    const toursByName = await Tour.find({name:req.params.name});
    res.json(toursByName);
})






const PORT = process.env.PORT || 3070;

app.listen(PORT, console.log(`Rock & Roll on ${PORT}`));

