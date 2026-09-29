import ProductRow from "./ProductRow";

export default function Productlisttable({products}){

    return(
        <>
            <div className="Productlisttable-div">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>price</td>
                            <td>quantity</td>
                            <td>warehouse_id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => 
                                <ProductRow key={index} id={product.id} name={product.name} price={product.price} quantity={product.quantity} warehouse_id={product.warehouse_id}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}