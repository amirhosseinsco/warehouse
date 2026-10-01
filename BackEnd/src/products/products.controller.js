import * as productService from "./products.service.js";
import { createProductSchema, updateProductSchema} from "./product.schema.js";

export async function GetProductsList(req, res) {
    try {
        const products = await productService.GetProductsList();

        return res.status(201).json({
            products
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get products"
        });
    }
}

export async function GetProduct(req, res) {
    try {
        const product = await productService.GetProduct(req.params.id);

        return res.status(201).json({
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get product"
        });
    }
}

export async function AddProduct(req, res) {
    try {
        
        const result = createProductSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid product data",
                errors: result.error.issues,
            });
        }
        const data = result.data;

        const product = await productService.AddProduct(data);

        return res.status(201).json({
            message: "Product created successfully"
        });
    } catch (error) {
    
        return res.status(500).json({
            message: "Failed to create product",
            error: error,
        });
    }
}

export async function UpdateProduct(req, res) {
    try {

        const result = updateProductSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid product data",
                errors: result.error.issues,
            });
        }
        const data = result.data;
        
        const product = await productService.UpdateProduct(req.params.id, data);

        return res.status(201).json({
            message: "Product updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update product",
        });
    }
}

export async function DeleteProduct(req, res) {
    try {
        const product = await productService.DeleteProduct(req.params.id);

        return res.status(201).json({
            message: "Product deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete product"
        });
    }
}