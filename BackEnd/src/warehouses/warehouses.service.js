import * as warehouseRepository from "./warehouses.repository.js"

export async function GetWarehousesList() {
    return warehouseRepository.GetList();
}

export async function GetWarehouse(id) {
    return warehouseRepository.Get(id);
}

export async function AddWarehouse(data) {
    return warehouseRepository.Create(data);
}

export async function UpdateWarehouse(warehouseId, data) {
    return warehouseRepository.Update(warehouseId, data);
}

export async function DeleteWarehouse(id) {
    return warehouseRepository.Delete(id);
}