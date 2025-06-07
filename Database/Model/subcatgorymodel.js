const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    }
    ,
    img_url:{
        type: String,
        required: true,
    },
    price:{
        type:String,
        required: true,
    }
})
const subcategories = mongoose.model('Subcategory', subcategorySchema);
module.exports = subcategories; // Export the subcategories model