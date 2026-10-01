import * as userService from "./users.service.js";
import { createUserSchema, updateUserSchema } from "./users.schema.js";

export async function GetUsersList(req, res) {
    try {
        const users = await userService.GetUsersList();

        return res.status(201).json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get users"
        });
    }
}

export async function GetUser(req, res) {
    try {
        const user = await userService.GetUser(req.params.id);

        return res.status(201).json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get user"
        });
    }
}

export async function AddUser(req, res) {
    try {
        const result = createUserSchema.safeParse(req.body);
        
        if (!result.success) {
            return res.status(400).json({
                message: "Invalid user data",
                errors: result.error.issues,
            });
        }
        const data = result.data;

        const user = await userService.AddUser(data);

        return res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create user",
            error: error,
        });
    }
}

export async function UpdateUser(req, res) {
    try {
        
        const result = updateUserSchema.safeParse(req.body);
        
        if (!result.success) {
            return res.status(400).json({
                message: "Invalid user data",
                errors: result.error.issues,
            });
        }
        const data = result.data;

        const user = await userService.UpdateUser(req.params.id, data);

        return res.status(201).json({
            message: "User updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update user"
        });
    }
}

export async function DeleteUser(req, res) {
    try {
        const user = await userService.DeleteUser(req.params.id);

        return res.status(201).json({
            message: "User deleted successfully",

        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete user"
        });
    }
}