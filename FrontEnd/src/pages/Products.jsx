import Navbar from "../components/layout/Navbar";
import Productslist from "../components/layout/Productslist";
import { useProducts } from "../hooks/useProducts";

export default function Products(){

    const { products, loading } = useProducts();

    if (loading) {
        return <p>Loading...</p>;
    }

    return(
        <>
            <Navbar/>
            <Productslist products={products.products}/>
        </>
    )
}