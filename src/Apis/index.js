import axios from 'axios'
import { API_ROOT } from 'utils'

export const fetchUserDetails = async (username, password) => {
    console.log(username, password)
    const req = await axios.get(`${API_ROOT}/v1/users/${username}/${password}`)
    return req.data
}

export const updateUser = async (id, data) => {
    const req = await axios.put(`${API_ROOT}/v1/users/${id}`, data)
    return req.data
}

export const createNewUsers = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/users`, data)
    return req.data
}