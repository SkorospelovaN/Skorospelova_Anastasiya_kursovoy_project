import { $authHost, $host } from "./index";
import {jwtDecode} from 'jwt-decode'

export const registration = async (fio, email, password, phone) => {
    const {data} = await $host.post('api/user/registration', {fio, email, password, phone})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const loginAdmin = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async (fio, email, password, phone) => {
    const {data} = await $authHost.get('api/user/auth', {fio, email, password, phone})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchUsers = async ( id, email, fio, phone) => {
    const {data} = await $authHost.get('api/user',  {params: {
        id, email, fio, phone
    }})
    return data
}

export const fetchOneUser = async (id) => {
    const {data} = await $authHost.get('api/user/' + id)
    return data
}

