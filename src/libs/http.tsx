import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    , isServer = typeof window === 'undefined'

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(async config => {

    if (isServer) {

        const { cookies } = (await import('next/headers'))
            , token = cookies().get('token')?.value

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    }
    else {

        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    }

    return config
})

export default api