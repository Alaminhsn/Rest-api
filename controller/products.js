const Product = require("../models/products")

const getAllProducts = async(req,res) =>{
    const mydata = await Product.find({});
    res.status(200).json({mydata});
}

const getAllProductsTesting= async(req,res) =>{
        const mydata = await Product.find({});
    res.status(200).json({mydata});
}

module.exports = {getAllProducts,getAllProductsTesting}