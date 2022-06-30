import axios from "axios";
import {API_CONFIGS} from "./config.api";
import {restore_cookies} from "../app/app.cookies.config";

export const autoConfig = () => {
    if (API_CONFIGS.access_token !== null) {
        console.log('Bạn đang ghi đè access_token,có thể sẽ xảy ra lỗi!')
    }

    let access_token = localStorage.getItem('access_token') || null
    if (access_token) {
        restoredToken(access_token)
    }
}
export const restoredToken = (token) => {
    try {
        restore_cookies('access_token', token)
        API_CONFIGS.access_token = token
        console.log('Restore Success!')
    } catch (e) {
        console.error(e)
    }
}