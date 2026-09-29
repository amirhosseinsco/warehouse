import express from "express";
import { GetProductsList, GetProduct, AddProduct, UpdateProduct, DeleteProduct } from "./products.controller.js";

const router = express.Router();

router.get("/", GetProductsList);
router.get("/:id", GetProduct);
router.post("/", AddProduct);
router.put("/:id", UpdateProduct);
router.delete("/:id", DeleteProduct);

export default router;