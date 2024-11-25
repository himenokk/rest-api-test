import axios from "axios"



export const fetchUserApi = async() => {
    return await axios.get("https://jsonplaceholder.typicode.com/users").then((response) => response.data);
}