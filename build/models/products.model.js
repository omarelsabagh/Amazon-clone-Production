"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const database_1 = __importDefault(require("./../database"));
class Products {
    //create product
    async addProductToDB(productName, price, description, category, image) {
        try {
            const conn = await database_1.default.connect();
            const sql = `INSERT INTO products (title,price,description,category,image) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
            const addedProductes = await conn.query(sql, [productName, price, description, category, image]);
            conn.release();
            return addedProductes.rows[0];
        }
        catch (error) {
            throw new Error(`couldnt add product to DB: ${error}`);
        }
    }
    //show products
    async showAllProducts() {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM products`;
            const allProducts = await conn.query(sql);
            conn.release();
            return allProducts.rows;
        }
        catch (error) {
            throw new Error(`couldn't get all products: ${error}`);
        }
    }
    //show one product
    async getOneProduct(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM products where id=$1`;
            const allProducts = await conn.query(sql, [id]);
            conn.release();
            return allProducts.rows;
        }
        catch (error) {
            throw new Error(`couldn't get one product: ${error}`);
        }
    }
    //delete all products
    async deleteAllProducts() {
        try {
            const conn = await database_1.default.connect();
            const sql = `DELETE FROM products`;
            await conn.query(sql);
            conn.release();
        }
        catch (error) {
            throw new Error(`couldn't delete all products: ${error}`);
        }
    }
}
exports.Products = Products;
