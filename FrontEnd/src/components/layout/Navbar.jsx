import Navbarbtn from "../common/Navbarbtn"
import { List, LucideUserSquare, LucideWarehouse} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();

    function moveTo(address){
        navigate(address)
    }

    return(
        <>
            <div className="Navbar-div">
                <div className="NavbarBtns-div">
                    <Navbarbtn onClick={() => moveTo("/products")} icon={List} title={"Products"} classN={"products"}/>
                    <Navbarbtn onClick={() => moveTo("/users")} icon={LucideUserSquare} title={"Users"} classN={"users"}/>
                    <Navbarbtn onClick={() => moveTo("/warehouses")} icon={LucideWarehouse} title={"Warehouses"} classN={"warehouses"}/>
                </div>
            </div>
        </>
    )
}