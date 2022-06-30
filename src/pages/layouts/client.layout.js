import {ClientNavbar} from "./client.navbar";
import {Outlet} from 'react-router-dom'
export const ClientLayout = (props)=>{
    return (
        <div>
            <ClientNavbar/>
            <Outlet/>
        </div>
    )
}