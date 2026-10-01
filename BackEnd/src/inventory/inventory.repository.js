import prisma from "../lib/prisma.js";

export async function GetList() {
    return await prisma.Inventory.findMany({
        include: {
            product: true,
            warehouse: true
        }
    });
}


export async function Get(id) {
    return await prisma.Inventory.findUnique({
        include: {
            product: true,
            warehouse: true
        },
        where: {
            id: Number(id),
        },
    });
}

export async function Create(data) {
    return await prisma.inventory.create({
        data: {
            product_id: Number(data.product_id),
            warehouse_id: Number(data.warehouse_id),

            quantity: data.quantity ?? 0,
            reserved_quantity: data.reserved_quantity ?? 0,
            damaged_quantity: data.damaged_quantity ?? 0,
            quarantine_quantity: data.quarantine_quantity ?? 0,

            average_cost: data.average_cost,
            last_cost: data.last_cost,

            minimum_stock: data.minimum_stock,
            maximum_stock: data.maximum_stock,
            reorder_point: data.reorder_point,
            reorder_quantity: data.reorder_quantity,

            stock_status: data.stock_status ?? "IN_STOCK",

            last_counted_at: data.last_counted_at,
            last_received_at: data.last_received_at,
            last_issued_at: data.last_issued_at,
        },
    });
}

export async function Update(inventoryId, data) {
    return await prisma.inventory.update({
        where: {
            id: Number(inventoryId),
        },

        data: {
            ...(data.product_id !== undefined && {
                product_id: Number(data.product_id),
            }),

            ...(data.warehouse_id !== undefined && {
                warehouse_id: Number(data.warehouse_id),
            }),

            ...(data.quantity !== undefined && {
                quantity: data.quantity,
            }),

            ...(data.reserved_quantity !== undefined && {
                reserved_quantity: data.reserved_quantity,
            }),

            ...(data.damaged_quantity !== undefined && {
                damaged_quantity: data.damaged_quantity,
            }),

            ...(data.quarantine_quantity !== undefined && {
                quarantine_quantity: data.quarantine_quantity,
            }),

            ...(data.average_cost !== undefined && {
                average_cost: data.average_cost,
            }),

            ...(data.last_cost !== undefined && {
                last_cost: data.last_cost,
            }),

            ...(data.minimum_stock !== undefined && {
                minimum_stock: data.minimum_stock,
            }),

            ...(data.maximum_stock !== undefined && {
                maximum_stock: data.maximum_stock,
            }),

            ...(data.reorder_point !== undefined && {
                reorder_point: data.reorder_point,
            }),

            ...(data.reorder_quantity !== undefined && {
                reorder_quantity: data.reorder_quantity,
            }),

            ...(data.stock_status !== undefined && {
                stock_status: data.stock_status,
            }),

            ...(data.last_counted_at !== undefined && {
                last_counted_at: data.last_counted_at,
            }),

            ...(data.last_received_at !== undefined && {
                last_received_at: data.last_received_at,
            }),

            ...(data.last_issued_at !== undefined && {
                last_issued_at: data.last_issued_at,
            }),
        },
    });
}

export async function Delete(id) {
    return await prisma.Inventory.delete({
        where: {
            id: Number(id),
        },
    });
}