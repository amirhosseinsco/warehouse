import pool from "../config/db.js";

export async function GetList() {
    const [result] = await pool.query(
        `SELECT * FROM products`
    );

    return result;
}

export async function Get(id) {
    const [result] = await pool.query(
        `SELECT * FROM products WHERE id=?`,
        [id]
    );

    return result || null;
}

export async function Create(data) {

    const [result] = await pool.query(
        `INSERT INTO products (name, price, quantity, warehouse_id)
         VALUES (?, ?, ?, ?)`,
        [data.name, data.price, data.quantity, data.warehouse_id]
    );

    console.log(result);

    return result;
}

export async function Update(productId, data) {
    const [result] = await pool.query(
        `UPDATE products SET name=?,price=?,quantity=?,warehouse_id=? WHERE id= ?`,
        [data.name, data.price, data.quantity, data.warehouse_id, productId]
    );

    return result;
}

export async function Delete(id) {
    const [result] = await pool.query(
        `DELETE FROM products WHERE id= ?`,
        [id]
    );

    return result;
}

export async function findWarehouseById(warehouseId) {

    const [rows] = await pool.execute(
        "SELECT id FROM warehouse WHERE id = ?",
        [warehouseId]
    );

    return rows[0] || null;
}