import { z } from "zod";

export const createProductSchema = z.object({
    barcode: z.string().min(1),
    internal_code: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),

    category_id: z.coerce.number().int().positive(),
    brand_id: z.coerce.number().int().positive(),

    weight: z.coerce.number().nonnegative().optional(),
    weight_unit: z.string().optional(),

    length: z.coerce.number().nonnegative().optional(),
    width: z.coerce.number().nonnegative().optional(),
    height: z.coerce.number().nonnegative().optional(),
    dimension_unit: z.string().optional(),

    selling_price: z.coerce.number().int().nonnegative(),

    status: z.enum([
        "ACTIVE",
        "INACTIVE",
        "DRAFT",
    ]),

    is_serialized: z.boolean().optional(),
    is_batch_tracked: z.boolean().optional(),
    is_expirable: z.boolean().optional(),

    has_variants: z.boolean().optional(),

    manufacturer: z.string().optional(),
    manufacturer_part_number: z.string().optional(),
    model_number: z.string().optional(),

    country_of_origin: z.string().optional(),

    created_by: z.coerce.number().int().positive().optional(),
    updated_by: z.coerce.number().int().positive().optional(),

    image_url: z.string().optional(),
});

export const updateProductSchema = createProductSchema.partial();