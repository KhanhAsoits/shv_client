export const restore_cookies = (name, value) => {
    if (localStorage.getItem(name)) {
        console.log('Cookies has taken!')
    } else {
        localStorage.setItem(name, value)
    }
}
export const get_cookies = (name) => {
    let require_cookies = localStorage.getItem(name)
    return require_cookies !== null ? require_cookies : null
}

export const check_is_auth = () => {
    return localStorage.getItem('userId') !== null
}