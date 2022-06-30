export const API_CONFIGS = {
    API_URL: 'http://localhost:5000/v1',
    access_token: null,
    post_request_config: function () {
        if (this.access_token !== null) {
            return {
                headers: {
                    Authorization: `Bearer ${this.access_token}`
                }
            }
        }
        console.error('access token null')
        return {}

    },
    get_request_config: function (url) {
        if (this.access_token !== null) {
            return `${url}/api_token=${this.access_token}}`
        }
        console.error('access token null')
        return ''
    }
}
