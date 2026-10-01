import { z } from "zod";

export const createWarehouseSchema = z.object({
    code: z
        .string()
        .min(1, "Code is required"),

    name: z
        .string()
        .min(1, "Name is required"),

    description: z
        .string()
        .optional(),

    warehouse_type: z.enum([
        "MAIN",
        "DISTRIBUTION",
        "RAW_MATERIAL",
        "FINISHED_GOODS",
        "COLD_STORAGE",
        "RETAIL",
    ]),

    status: z.enum([
        "ACTIVE",
        "INACTIVE",
        "MAINTENANCE",
        "CLOSED",
    ]),

    address_line_1: z
        .string()
        .min(1, "Address is required"),

    address_line_2: z
        .string()
        .optional(),

    city: z
        .string()
        .min(1, "City is required"),

    state: z
        .string()
        .optional(),

    country: z
        .string()
        .min(1, "Country is required"),

    postal_code: z
        .string()
        .optional(),

    latitude: z
        .coerce
        .number()
        .optional(),

    longitude: z
        .coerce
        .number()
        .optional(),

    phone: z
        .string()
        .optional(),

    email: z
        .string()
        .email("Invalid email address")
        .optional(),

    manager_user_id: z
        .coerce
        .number()
        .int()
        .positive()
        .optional(),

    capacity: z
        .coerce
        .number()
        .nonnegative()
        .optional(),

    capacity_unit: z
        .string()
        .optional(),

    timezone: z
        .string()
        .min(1, "Timezone is required"),

    is_active: z
        .boolean()
        .optional(),
});

export const updateWarehouseSchema = createWarehouseSchema.partial();