import Warehouseslisttable from "../common/warehouse/Warehouseslisttable";


export default function Warehouseslist({warehouses}){

    return(
        <>
            <section className="Productslist-div">
                <Warehouseslisttable warehouses={warehouses}/>
            </section>
        </>
    )
}