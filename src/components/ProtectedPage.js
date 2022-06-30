import {Component} from "react";
import {Route, Navigate} from "react-router-dom";

export const Authorial = (props) => {
    const isAuth = localStorage.getItem('shv_user_id') || null
    if (isAuth != null) {
        return props.children
    }
    return <Navigate to={'/auth/login'}/>
}
export const ProtectedPage = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               element={
                   <Authorial>
                       <Component></Component>
                   </Authorial>
               }
        />
    )
}