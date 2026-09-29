export default function WarehouseRow({id, name, address}){

    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{address}</td>
            </tr>
        </>
    )
}