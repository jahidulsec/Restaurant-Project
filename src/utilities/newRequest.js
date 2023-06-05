import axios from "axios";

const newRequest = axios.create({
    baseURL: "https://little-lemon-api.vercel.app/api/",
    // withCredentials: true
})

export default newRequest;