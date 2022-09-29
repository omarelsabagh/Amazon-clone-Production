"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsInOrder = void 0;
const database_1 = __importDefault(require("./../database"));
class ProductsInOrder {
    async getAllProducts(orderId) {
        try {
            const conn = await database_1.default.connect();
            const sql = `SELECT * FROM products INNER JOIN order_products ON order_products.order_id = $1 AND products.id = order_products.product_id`;
            const allProducts = await conn.query(sql, [orderId]);
            conn.release();
            return allProducts.rows;
        }
        catch (error) {
            throw new Error(`couldn't get all users: ${error}`);
        }
    }
}
exports.ProductsInOrder = ProductsInOrder;
