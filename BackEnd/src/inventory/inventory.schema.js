import { z } from "zod";

export const createInventorySchema = z.object({
  product_id: z.coerce.number().int().positive(),

  warehouse_id: z.coerce.number().int().positive(),

  quantity: z.coerce.number().nonnegative().optional(),
  reserved_quantity: z.coerce.number().nonnegative().optional(),
  damaged_quantity: z.coerce.number().nonnegative().optional(),
  quarantine_quantity: z.coerce.number().nonnegative().optional(),

  average_cost: z.coerce.number().nonnegative().optional(),
  last_cost: z.coerce.number().nonnegative().optional(),

  minimum_stock: z.coerce.number().nonnegative().optional(),
  maximum_stock: z.coerce.number().nonnegative().optional(),
  reorder_point: z.coerce.number().nonnegative().optional(),
  reorder_quantity: z.coerce.number().nonnegative().optional(),

  stock_status: z.enum([
    "IN_STOCK",
    "LOW_STOCK",
    "OUT_OF_STOCK",
    "OVERSTOCK",
  ]),

  last_counted_at: z.coerce.date().optional(),
  last_received_at: z.coerce.date().optional(),
  last_issued_at: z.coerce.date().optional(),
});

export const updateInventorySchema = createInventorySchema.partial();