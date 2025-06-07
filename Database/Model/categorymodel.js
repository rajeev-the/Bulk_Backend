const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       
    },
    slug:{
        type: String,
        required: true,

    },
    img_url:{
        type: String,
        required: true,
    },
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory'
    }]



})
const categorieModel = mongoose.model('Category', categorySchema);
module.exports = categorieModel; // Export the categories model