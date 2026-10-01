import * as inventoryRepository from "./inventory.repository.js"

export async function GetInventoriesList() {
    return inventoryRepository.GetList();
}

export async function GetInventory(id) {
    return inventoryRepository.Get(id);
}

export async function AddInventory(data) {
    return inventoryRepository.Create(data);
}

export async function UpdateInventory(InventoryId ,data) {
    return inventoryRepository.Update(InventoryId, data);
}

export async function DeleteInventory(id) {
    return inventoryRepository.Delete(id);
}