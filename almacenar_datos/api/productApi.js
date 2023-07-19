import { Axios } from "axios";
import axios from "axios";



export const productApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/productos'
})