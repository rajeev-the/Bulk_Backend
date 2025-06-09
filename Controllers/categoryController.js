const { model } = require("mongoose")

const subcategories = require('../Database/Model/subcatgorymodel.js');
const categorieModel = require('../Database/Model/categorymodel')
// Controllers/categoryController.js
const createCategory = async (req, res) => {
       
    const { name, slug, img_url } = req.body;
    try {
        // Validate required fields
        if (!name || !slug || !img_url) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if category already exists
        const existingCategory = await categorieModel.findOne({ slug });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }

        // Create new category
           // Create new category
    const newCategory = new categorieModel({
      name,
      slug,
      img_url,
    });

    await newCategory.save();
        
        return res.status(201).json({ message: "Category created successfully", category: newCategory });
        
    } catch (error) {
        console.error("Error creating category:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }


};
const getAllCategories = async (req, res) => {
    try {
        const categories = await categorieModel.find().populate('subcategories');
        return res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

const subcategoriesCreate = async (req, res) => {
    const { name, slug, img_url, categoryId ,price ,sample_price } = req.body;
    try {
        // Validate required fields
        if (!name || !slug || !img_url || !categoryId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if subcategory already exists
        const existingSubcategory = await subcategories.findOne({ slug });
        if (existingSubcategory) {
            return res.status(400).json({ message: "Subcategory already exists" });
        }

        // Create new subcategory
        const newSubcategory = new subcategories({
            name,
            slug,
            img_url,
            category: categoryId,
            sample_price:sample_price,
            price:price

        });

        await newSubcategory.save();

        // Update the category to include the new subcategory
        await categorieModel.findByIdAndUpdate(categoryId, { $push: { subcategories: newSubcategory._id } });

        return res.status(201).json({ message: "Subcategory created successfully", subcategory: newSubcategory });

    } catch (error) {
        console.error("Error creating subcategory:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = {
  createCategory,
    getAllCategories,
    subcategoriesCreate
};


