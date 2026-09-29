export default function UserRow({id, name, email}){

    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}