import Userslisttable from "../common/users/Userslisttable";


export default function Userslist({users}){

    return(
        <>
            <section className="Productslist-div">
                <Userslisttable users={users}/>
            </section>
        </>
    )
}