const { Schema, model } = require("mongoose");

const tourSchema = new Schema({
    name: String,
    price: Number,
    rating: Number,
    premium: Boolean,
});

const Tour = model("Tour", tourSchema);

module.exports = Tour;