import UserRow from "./UserRow";

export default function Userslisttable({users}){

    return(
        <>
            <div className="Productlisttable-div">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => 
                                <UserRow key={index} id={user.id} name={user.name} email={user.email}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}