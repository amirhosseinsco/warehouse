import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z
            .string()
            .min(8)
            .regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/)
});