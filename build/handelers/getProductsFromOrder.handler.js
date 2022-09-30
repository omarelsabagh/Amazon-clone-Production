"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProductsFromOrder_model_1 = require("./../models/getProductsFromOrder.model");
function getProductsFromOrderHandeler(app) {
    app.get('/productinorder/:id', express_1.default.json(), index);
}
const productFromOrdr = new getProductsFromOrder_model_1.ProductsInOrder;
async function index(req, res) {
    try {
        const response = await productFromOrdr.getAllProducts(req.params.id);
        res.json({ message: 'get all products in order success', response, number_of_products: response.length });
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
}
exports.default = getProductsFromOrderHandeler;
