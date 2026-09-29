import Navbar from "../components/layout/Navbar";
import Userslist from "../components/layout/Userslist";
import { useUsers } from "../hooks/useUsers";

export default function Users(){

    const { users, loading } = useUsers();

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <>
            <Navbar/>
            <Userslist users={users.users}/>
        </>
    )
}