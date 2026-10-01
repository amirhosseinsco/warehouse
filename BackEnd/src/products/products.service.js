import * as productRepository from "./products.repository.js"

export async function GetProductsList() {
    return productRepository.GetList();
}

export async function GetProduct(id) {
    return productRepository.Get(id);
}

export async function AddProduct(data) {
    return productRepository.Create(data);
}

export async function UpdateProduct(productId ,data) {
    return productRepository.Update(productId, data);
}

export async function DeleteProduct(id) {
    return productRepository.Delete(id);
}