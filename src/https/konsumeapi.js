import axios from "axios";

export default axios.create({
    baseURL: 'https://localhost:44346',
    headers: {
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json'
    }
})