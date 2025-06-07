
const express  = require('express');
const router = express.Router();
const CategoryController = require('../Controllers/categoryController.js');

// Import the UseRController



router.post('/create', CategoryController.createCategory);
router.get('/all', CategoryController.getAllCategories);
router.post('/subcategory/create', CategoryController.subcategoriesCreate);




module.exports = router;




