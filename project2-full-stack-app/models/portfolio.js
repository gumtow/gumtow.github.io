// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const portfolioSchema = new Schema({
    title: {type:String, required:true},
    img: {type:String, required:true},
    description: String, 
    tags: Array,
    rating:Number,
    show:Boolean
}, {timestamps:true});

// Create Model
const Portfolio = mongoose.model('Porfolio', portfolioSchema);

// Export
module.exports = Portfolio;