import { z } from "zod";

export const createWarehouseSchema = z.object({
    name: z.string().min(1),
    address: z.string().min(1),
});