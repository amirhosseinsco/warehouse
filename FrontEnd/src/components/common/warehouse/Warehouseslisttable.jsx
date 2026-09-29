import WarehouseRow from "./WarehouseRow";

export default function Warehouseslisttable({warehouses}){

    return(
        <>
            <div className="Productlisttable-div">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            warehouses.map((warehouse, index) => 
                                <WarehouseRow key={index} id={warehouse.id} name={warehouse.name} address={warehouse.address}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}