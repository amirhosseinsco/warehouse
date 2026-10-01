import { z } from "zod";

export const createUserSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters"),

    email: z
        .string()
        .email("Invalid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),

    first_name: z
        .string()
        .min(1, "First name is required"),

    last_name: z
        .string()
        .min(1, "Last name is required"),

    phone: z
        .string()
        .min(1, "Phone is required"),

    postal_code: z
        .string()
        .optional(),

    avatar_url: z
        .string()
        .optional(),

    employee_code: z
        .string()
        .optional(),

    job_title: z
        .string()
        .optional(),

    department_id: z
        .coerce
        .number()
        .int()
        .positive()
        .optional(),

    status: z
        .enum([
            "ACTIVE",
            "INACTIVE",
            "SUSPENDED",
            "PENDING",
        ])
        .optional(),
});

export const updateUserSchema = createUserSchema.partial();