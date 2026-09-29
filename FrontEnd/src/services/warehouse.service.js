import api from "../api/axios";

export const getWarehousesList = async () => {
    const response = await api.get("/warehouse");
    return response.data;
};

export const getWarehouse = async (id) => {
    const response = await api.get(`/warehouse/${id}`);
    return response.data;
};

export const createWarehouse = async (warehouse) => {
    const response = await api.post("/warehouse", warehouse);
    return response.data;
};

export const updateWarehouse = async (id, warehouse) => {
    const response = await api.put(`/warehouse/${id}`, warehouse);
    return response.data;
};

export const deleteWarehouse = async (id) => {
    const response = await api.delete(`/warehouse/${id}`);
    return response.data;
};