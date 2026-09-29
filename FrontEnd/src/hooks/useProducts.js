import { useEffect, useState } from "react";
import { getProductsList } from "../services/product.service";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProductsList();
                setProducts(data);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        loading
    };
};