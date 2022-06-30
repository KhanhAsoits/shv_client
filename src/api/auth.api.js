import axios from "axios";
import {API_CONFIGS} from "./config.api";
import {restoredToken} from "./auto_config.api";

export const loginAPI = async (email, password) => {
    console.log(email, password)
    let res = await axios.post(`${API_CONFIGS.API_URL}/auth/get_token`, {
        email: email,
        password: password
    }).then((res) => res.data)
    return res
}

export const registerAPI = async (name, email, password) => {
    let res = await axios.post(`${API_CONFIGS.API_URL}/users/create`, {
        name: name,
        email: email,
        password: password
    }).then((res) => res.data)
    return res
}