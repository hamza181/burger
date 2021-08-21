import axios from "axios";

const instance = axios.create({
    baseURL: 'https://chatapp-e3c97-default-rtdb.firebaseio.com/'
})

export default instance;