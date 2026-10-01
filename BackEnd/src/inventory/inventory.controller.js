import * as inventoryService from "./inventory.service.js";
import { createInventorySchema, updateInventorySchema} from "./inventory.schema.js";

export async function GetInventoriesList(req, res) {
    try {
        const inventories = await inventoryService.GetInventoriesList();

        return res.status(201).json({
            inventories
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get inventories"
        });
    }
}

export async function GetInventory(req, res) {
    try {
        const inventory = await inventoryService.GetInventory(req.params.id);

        return res.status(201).json({
            inventory
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get inventory"
        });
    }
}

export async function AddInventory(req, res) {
    try {
        
        const result = createInventorySchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid inventory data",
                errors: result.error.issues,
            });
        }
        const data = result.data;

        const inventory = await inventoryService.AddInventory(data);

        return res.status(201).json({
            message: "Inventory created successfully"
        });
    } catch (error) {
    
        return res.status(500).json({
            message: "Failed to create inventory",
            error: error,
        });
    }
}

export async function UpdateInventory(req, res) {
    try {

        const result = updateInventorySchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid product data",
                errors: result.error.issues,
            });
        }
        const data = result.data;
        
        const inventory = await inventoryService.UpdateInventory(req.params.id, data);

        return res.status(201).json({
            message: "Inventory updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update inventory",
        });
    }
}

export async function DeleteInventory(req, res) {
    try {
        const inventory = await inventoryService.DeleteInventory(req.params.id);

        return res.status(201).json({
            message: "Inventory deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete inventory"
        });
    }
}