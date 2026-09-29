export default function ProductRow({id, name, price, quantity, warehouse_id}){

    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{warehouse_id}</td>
            </tr>
        </>
    )
}