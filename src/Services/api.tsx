import axios from "axios"

export const api = axios.create({
    baseURL: "https://caxamtour-api.onrender.com",
    timeout: 9000,
})