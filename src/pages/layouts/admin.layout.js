import {AdminNavbar} from "./admin.navbar";
import {Outlet} from 'react-router-dom'

export const AdminLayout = (props) => {

    return (
        <div>
            <AdminNavbar/>
            <Outlet/>
        </div>
    )

}