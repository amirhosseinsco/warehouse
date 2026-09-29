import { useLocation } from "react-router-dom";

export default function Navbarbtn({ icon: Icon, title, onClick, classN }){

    const location = useLocation();

    let className

    location.pathname == "/"+classN ? className = "SidebarItem-div " + classN + " active" : className = "SidebarItem-div " + classN 
    
    return(
        <div className={"NavbarBtn " + className} onClick={onClick}>
            <Icon size={16} strokeWidth={3}/>
            <span>{title}</span>
        </div>
    )
}