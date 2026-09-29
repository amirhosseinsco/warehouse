import * as productRepository from "./products.repository.js"

export async function GetProductsList() {
    return productRepository.GetList();
}

export async function GetProduct(id) {
    return productRepository.Get(id);
}

export async function AddProduct(data) {
    const warehouse = await productRepository.findWarehouseById(
        data.warehouse_id
    )
    if (!warehouse) {
        throw new Error("Warehouse not found");
    }

    return productRepository.Create(data);
}

export async function UpdateProduct(productId ,data) {
    const warehouse = await productRepository.findWarehouseById(
        data.warehouse_id
    )
    if (!warehouse) {
        throw new Error("Warehouse not found");
    }

    return productRepository.Update(productId, data);
}

export async function DeleteProduct(id) {
    return productRepository.Delete(id);
}