import express from "express";
import { GetWarehousesList, GetWarehouse, AddWarehouse, UpdateWarehouse, DeleteWarehouse} from "./warehouses.controller.js";

const router = express.Router();

router.get("/", GetWarehousesList);
router.get("/:id", GetWarehouse);
router.post("/", AddWarehouse);
router.put("/:id", UpdateWarehouse);
router.delete("/:id", DeleteWarehouse);

export default router;