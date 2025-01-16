import axios from "axios";

const createAxios = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

export default createAxios;