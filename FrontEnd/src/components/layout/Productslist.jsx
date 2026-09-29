import Productlisttable from "../common/products/Productlisttable";

export default function Productslist({products}){

    return(
        <>
            <section className="Productslist-div">
                <Productlisttable products={products}/>
            </section>
        </>
    )
}