import axios from 'axios'
import { API_ROOT } from 'utils'
const token = JSON.parse(localStorage.getItem('auth-token-user'))

export const fetchUserDetails = async (username, password) => {
    const req = await axios.get(`${API_ROOT}/v1/users/${username}/${password}`)
    return req.data
}

export const fetchUserOrderDetails = async (username) => {
    const req = await axios.get(`${API_ROOT}/v1/users/${username}`)
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

export const fetchLaptopCollectingByName = async (id) => {
    const req = await axios.get(`${API_ROOT}/v1/laptopCollecting/${id}`,{ headers: { 'auth-token-user': token }})
    return req.data
}

export const fetchSearchLaptopCollecting = async (data, countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/laptopCollecting/search`, { params: {...data, count:countPage }})
    return req.data
}

export const createOrderByCustomer = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/order`, data)
    return req.data
}