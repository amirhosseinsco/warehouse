import prisma from "../lib/prisma.js";

export async function GetList() {
    return await prisma.product.findMany({
        include: {
            category: true,
            brand: true,
            creator: true,
            updater: true,
            inventory: true
        }
    });
}


export async function Get(id) {
    return await prisma.product.findUnique({
        include: {
            category: true,
            brand: true,
            updater: true,
            inventory: true
        },
        where: {
            id: Number(id),
        },
    });
}

export async function Create(data) {
    const product = await prisma.product.create({
        data: {
            name: data.name,
            barcode: data.barcode,
            internal_code: data.internal_code,
            description: data.description,

            category_id: Number(data.category_id),
            brand_id: Number(data.brand_id),

            weight: data.weight,
            weight_unit: data.weight_unit,

            length: data.length,
            width: data.width,
            height: data.height,
            dimension_unit: data.dimension_unit,

            selling_price: Number(data.selling_price),

            status: data.status,

            is_serialized: data.is_serialized ?? false,
            is_batch_tracked: data.is_batch_tracked ?? false,
            is_expirable: data.is_expirable ?? false,
            has_variants: data.has_variants ?? false,

            manufacturer: data.manufacturer,
            manufacturer_part_number: data.manufacturer_part_number,
            model_number: data.model_number,

            country_of_origin: data.country_of_origin,

            created_by: data.created_by
                ? Number(data.created_by)
                : null,

            updated_by: data.updated_by
                ? Number(data.updated_by)
                : null,

            image_url: data.image_url,
        },
    });
    return product;
}

export async function Update(productId, data) {
    return await prisma.product.update({
        where: {
            id: Number(productId),
        },
        data: {
            ...(data.name !== undefined && {
                name: data.name,
            }),

            ...(data.description !== undefined && {
                description: data.description,
            }),

            ...(data.category_id !== undefined && {
                category_id: Number(data.category_id),
            }),

            ...(data.brand_id !== undefined && {
                brand_id: Number(data.brand_id),
            }),

            ...(data.weight !== undefined && {
                weight: data.weight,
            }),

            ...(data.weight_unit !== undefined && {
                weight_unit: data.weight_unit,
            }),

            ...(data.length !== undefined && {
                length: data.length,
            }),

            ...(data.width !== undefined && {
                width: data.width,
            }),

            ...(data.height !== undefined && {
                height: data.height,
            }),

            ...(data.dimension_unit !== undefined && {
                dimension_unit: data.dimension_unit,
            }),

            ...(data.selling_price !== undefined && {
                selling_price: Number(data.selling_price),
            }),

            ...(data.status !== undefined && {
                status: data.status,
            }),

            ...(data.is_serialized !== undefined && {
                is_serialized: data.is_serialized,
            }),

            ...(data.is_batch_tracked !== undefined && {
                is_batch_tracked: data.is_batch_tracked,
            }),

            ...(data.is_expirable !== undefined && {
                is_expirable: data.is_expirable,
            }),

            ...(data.has_variants !== undefined && {
                has_variants: data.has_variants,
            }),

            ...(data.manufacturer !== undefined && {
                manufacturer: data.manufacturer,
            }),

            ...(data.manufacturer_part_number !== undefined && {
                manufacturer_part_number: data.manufacturer_part_number,
            }),

            ...(data.model_number !== undefined && {
                model_number: data.model_number,
            }),

            ...(data.country_of_origin !== undefined && {
                country_of_origin: data.country_of_origin,
            }),

            ...(data.updated_by !== undefined && {
                updated_by: Number(data.updated_by),
            }),

            ...(data.image_url !== undefined && {
                image_url: data.image_url,
            }),
        },
    });
}

export async function Delete(id) {
    return await prisma.product.delete({
        where: {
            id: Number(id),
        },
    });
}