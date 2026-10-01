import prisma from "../lib/prisma.js";

export async function GetList() {
    return await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            email: true,
            phone: true,
            first_name: true,
            last_name: true,
            postal_code: true,
            avatar_url: true,
            employee_code : true,
            job_title : true,
            department_id : true,
            last_login_at: true,
            email_verified_at: true,
            phone_verified_at: true,
            created_at: true,
            updated_at: true,
            phone_verified_at: true,
            managedWarehouses: true,
            createdProducts: true,
            updatedProducts: true
        },
    });
}

export async function Get(id) {
    return await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
        select: {
            id: true,
            username: true,
            email: true,
            phone: true,
            first_name: true,
            last_name: true,
            postal_code: true,
            avatar_url: true,
            employee_code : true,
            job_title : true,
            department_id : true,
            last_login_at: true,
            email_verified_at: true,
            phone_verified_at: true,
            created_at: true,
            updated_at: true,
            phone_verified_at: true,
            managedWarehouses: true,
            createdProducts: true,
            updatedProducts: true
        }
    });
}

export async function Create(data) {
    return await prisma.user.create({
        data: {
            username: data.username,
            email: data.email,
            phone: data.phone,

            password_hash: data.password_hash,

            first_name: data.first_name,
            last_name: data.last_name,

            postal_code: data.postal_code,
            avatar_url: data.avatar_url,

            employee_code: data.employee_code,
            job_title: data.job_title,
            department_id: data.department_id
                ? Number(data.department_id)
                : null,

            status: data.status ?? "ACTIVE",
        },
    });
}

export async function Update(userId, data) {
    return await prisma.user.update({
        where: {
            id: Number(userId),
        },
        data: {
            ...(data.username !== undefined && {
                username: data.username,
            }),

            ...(data.email !== undefined && {
                email: data.email,
            }),

            ...(data.phone !== undefined && {
                phone: data.phone,
            }),

            ...(data.first_name !== undefined && {
                first_name: data.first_name,
            }),

            ...(data.last_name !== undefined && {
                last_name: data.last_name,
            }),

            ...(data.postal_code !== undefined && {
                postal_code: data.postal_code,
            }),

            ...(data.avatar_url !== undefined && {
                avatar_url: data.avatar_url,
            }),

            ...(data.employee_code !== undefined && {
                employee_code: data.employee_code,
            }),

            ...(data.job_title !== undefined && {
                job_title: data.job_title,
            }),

            ...(data.department_id !== undefined && {
                department_id: Number(data.department_id),
            }),

            ...(data.status !== undefined && {
                status: data.status,
            }),
        },
    });
}

export async function Delete(id) {
    return await prisma.user.delete({
        where: {
            id: Number(id),
        },
    });
}