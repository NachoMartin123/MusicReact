import axios from "axios";

export default axios.create({
    baseURL: "mongodb://admin:password@localhost:27017/musicReact?authSource=admin",
    headers: {
        "Content-type": "application/json"
    }
});