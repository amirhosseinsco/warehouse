import { useEffect, useState } from "react";
import { getWarehousesList } from "../services/warehouse.service";

export const useWarehouses = () => {
    const [warehouses, setWarehouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getWarehousesList();
                setWarehouses(data);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return {
        warehouses,
        loading
    };
};