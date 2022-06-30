import {check_is_auth} from "../app/app.cookies.config";
import {autoConfig} from "../api/auto_config.api";
import {Navigate} from 'react-router-dom'

export const Authorial = (props) => {
    let isAuth = check_is_auth()
    if (isAuth) {
        autoConfig()
        return props.children
    } else {
        return <Navigate to={'/auth'}/>
    }
}