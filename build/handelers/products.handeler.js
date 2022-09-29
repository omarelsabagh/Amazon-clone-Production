"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = require("../models/products.model");
function productsHandeler(app) {
    app.post('/products', express_1.default.json(), create);
    app.get('/products', express_1.default.json(), index);
    app.get('/products/:id', express_1.default.json(), show);
}
const products = new products_model_1.Products();
//create product
async function create(req, res) {
    try {
        const title = req.body.title;
        const price = parseInt(req.body.price);
        const description = req.body.description;
        const category = req.body.category;
        const image = req.body.image;
        const addedProduct = await products.addProductToDB(title, price, description, category, image);
        res.json({
            message: 'product added to DB successfully',
            addedProduct: addedProduct,
        });
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
}
//get all products
async function index(_req, res) {
    try {
        const allProducts = await products.showAllProducts();
        res.json({
            message: 'get all products from DB successfully',
            allProducts,
        });
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
}
//get one user
async function show(req, res) {
    try {
        const userId = parseInt(req.params.id);
        const oneProduct = await products.getOneProduct(userId);
        res.json({
            message: 'get one product from DB successfully',
            oneProduct,
        });
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
}
exports.default = productsHandeler;
