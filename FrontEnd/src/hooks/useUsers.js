import { useEffect, useState } from "react";
import { getUsersList } from "../services/user.service";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsersList();
                setUsers(data);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return {
        users,
        loading
    };
};