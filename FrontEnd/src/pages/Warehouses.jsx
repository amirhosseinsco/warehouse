import Navbar from "../components/layout/Navbar";
import Warehouseslist from "../components/layout/Warehouseslist";
import { useWarehouses } from "../hooks/useWarehouses";

export default function Warehouses(){

    const { warehouses, loading } = useWarehouses();

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <>
            <Navbar/>
            <Warehouseslist warehouses={warehouses.warehouses}/>
        </>
    )
}