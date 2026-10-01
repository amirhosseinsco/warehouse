import express from "express";
import { GetInventoriesList, GetInventory, AddInventory, UpdateInventory, DeleteInventory } from "./inventory.controller.js";

const router = express.Router();

router.get("/", GetInventoriesList);
router.get("/:id", GetInventory);
router.post("/", AddInventory);
router.put("/:id", UpdateInventory);
router.delete("/:id", DeleteInventory);

export default router;