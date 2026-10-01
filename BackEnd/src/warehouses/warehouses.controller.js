import * as warehouseService from "./warehouses.service.js";
import { createWarehouseSchema, updateWarehouseSchema} from "./warehouses.schema.js";

export async function GetWarehousesList(req, res) {
    try {
        const warehouses = await warehouseService.GetWarehousesList();

        return res.status(201).json({
            warehouses
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get warehouses"
        });
    }
}

export async function GetWarehouse(req, res) {
    try {
        const warehouse = await warehouseService.GetWarehouse(req.params.id);

        return res.status(201).json({
            warehouse
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get warehouse"
        });
    }
}

export async function AddWarehouse(req, res) {
    try {
        
        const result = createWarehouseSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid warehouse data",
                errors: result.error.issues,
            });
        }
        const data = result.data;
        const warehouse = await warehouseService.AddWarehouse(data);

        return res.status(201).json({
            message: "warehouse created successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create warehouse",
            error : error
        });
    }
}

export async function UpdateWarehouse(req, res) {
    try {
        
        const result = updateWarehouseSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid warehouse data",
                errors: result.error.issues,
            });
        }
        const data = result.data;

        const warehouse = await warehouseService.UpdateWarehouse(req.params.id ,data);

        return res.status(201).json({
            message: "warehouse updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update warehouse"
        });
    }
}

export async function DeleteWarehouse(req, res) {
    try {
        const warehouse = await warehouseService.DeleteWarehouse(req.params.id);

        return res.status(201).json({
            message: "warehouse deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete warehouse"
        });
    }
}