import express from "express";
import { GetUsersList, GetUser, AddUser, UpdateUser, DeleteUser} from "./users.controller.js";

const router = express.Router();

router.get("/", GetUsersList);
router.get("/:id", GetUser);
router.post("/", AddUser);
router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

export default router;