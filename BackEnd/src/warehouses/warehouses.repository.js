import db from "../config/db.js";

export async function GetList() {
    const [result] = await db.query(
        `SELECT * FROM warehouse`
    );

    return result;
}

export async function Get(id) {
    const [result] = await db.query(
        `SELECT * FROM warehouse WHERE id=?`,
        [id]
    );

    return result;
}

export async function Create(data) {
    const [result] = await db.query(
        `INSERT INTO warehouse (name, address)
         VALUES (?, ?)`,
        [data.name, data.address]
    );

    return result;
}

export async function Update(warehouseId ,data) {
    const [result] = await db.query(
        `UPDATE warehouse SET name=?,address=? WHERE id=?`,
        [data.name, data.address, warehouseId]
    );

    return result;
}

export async function Delete(id) {
    const [result] = await db.query(
        `DELETE FROM warehouse WHERE id= ?`,
        [id]
    );

    return result;
}