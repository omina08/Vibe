import axios from "axios";

 const axiosFetch = axios.create({
    baseURL : "https://683aeca043bb370a86742b12.mockapi.io/",
    headers :{
        "Content-Type" : "application/json"
    }
 })

 export default axiosFetch