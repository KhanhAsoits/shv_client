import {Outlet} from 'react-router-dom'
import {AuthorNavbar} from "./author.navbar";

export const AuthorsLayout = (props) => {
    return (
        <div>
            <AuthorNavbar/>
            <Outlet/>
        </div>
    )
}