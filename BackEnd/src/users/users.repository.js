import db from "../config/db.js";

export async function GetList() {
    const [result] = await db.query(
        `SELECT * FROM users`
    );

    return result;
}

export async function Get(id) {
    const [result] = await db.query(
        `SELECT * FROM users WHERE id=?`,
        [id]
    );

    return result;
}

export async function Create(data) {
    const [result] = await db.query(
        `INSERT INTO users (name, email, password)
         VALUES (?, ?, ?)`,
        [data.name, data.email, data.password]
    );

    return result;
}

export async function Update(userId, data) {
    const [result] = await db.query(
        `UPDATE users SET name=?,email=?,password=? WHERE id=?`,
        [data.name, data.email, data.password, userId]
    );

    return result;
}

export async function Delete(id) {
    const [result] = await db.query(
        `DELETE FROM users WHERE id=?`,
        [id]
    );

    return result;
}