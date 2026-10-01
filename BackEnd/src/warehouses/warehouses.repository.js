import prisma from "../lib/prisma.js";

export async function GetList() {
    return await prisma.warehouse.findMany({
        include: {
            manager: true,
            inventory: true
        }
    });
}

export async function Get(id) {
    return await prisma.warehouse.findUnique({
        include: {
            manager: true,
            inventory: true
        },
        where: {
            id: Number(id),
        },
    });
}

export async function Create(data) {
    return await prisma.warehouse.create({
        data: {
            code: data.code,
            name: data.name,
            description: data.description,

            warehouse_type: data.warehouse_type,
            status: data.status,

            address_line_1: data.address_line_1,
            address_line_2: data.address_line_2,
            city: data.city,
            state: data.state,
            country: data.country,
            postal_code: data.postal_code,

            latitude: data.latitude,
            longitude: data.longitude,

            phone: data.phone,
            email: data.email,

            manager_user_id: data.manager_user_id
                ? Number(data.manager_user_id)
                : null,

            capacity: data.capacity,
            capacity_unit: data.capacity_unit,

            timezone: data.timezone,

            is_active: data.is_active ?? true,
        },
    });
}

export async function Update(warehouseId, data) {
    return await prisma.warehouse.update({
        where: {
            id: Number(warehouseId),
        },
        data: {
            ...(data.code !== undefined && {
                code: data.code,
            }),

            ...(data.name !== undefined && {
                name: data.name,
            }),

            ...(data.description !== undefined && {
                description: data.description,
            }),

            ...(data.warehouse_type !== undefined && {
                warehouse_type: data.warehouse_type,
            }),

            ...(data.status !== undefined && {
                status: data.status,
            }),

            ...(data.address_line_1 !== undefined && {
                address_line_1: data.address_line_1,
            }),

            ...(data.address_line_2 !== undefined && {
                address_line_2: data.address_line_2,
            }),

            ...(data.city !== undefined && {
                city: data.city,
            }),

            ...(data.state !== undefined && {
                state: data.state,
            }),

            ...(data.country !== undefined && {
                country: data.country,
            }),

            ...(data.postal_code !== undefined && {
                postal_code: data.postal_code,
            }),

            ...(data.latitude !== undefined && {
                latitude: data.latitude,
            }),

            ...(data.longitude !== undefined && {
                longitude: data.longitude,
            }),

            ...(data.phone !== undefined && {
                phone: data.phone,
            }),

            ...(data.email !== undefined && {
                email: data.email,
            }),

            ...(data.manager_user_id !== undefined && {
                manager_user_id: Number(data.manager_user_id),
            }),

            ...(data.capacity !== undefined && {
                capacity: data.capacity,
            }),

            ...(data.capacity_unit !== undefined && {
                capacity_unit: data.capacity_unit,
            }),

            ...(data.timezone !== undefined && {
                timezone: data.timezone,
            }),

            ...(data.is_active !== undefined && {
                is_active: data.is_active,
            }),
        },
    });
}

export async function Delete(id) {
    return await prisma.warehouse.delete({
        where: {
            id: Number(id),
        },
    });
}