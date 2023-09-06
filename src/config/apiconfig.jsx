import axios from "axios";

function ApiService(props) {
    const {apiUrl} = props
    
    const httpClient = axios.create({
        baseURL: "http://localhost:8080"
    })
    
    const post = (url, objeto) => {
        return httpClient.post(apiUrl + url, objeto)
    }
    
    const put = (url, objeto) => {
        return httpClient.put(apiUrl + url, objeto)
    }

    const remove = (url) => {
        return httpClient.delete(apiUrl + url)
    }   

    const get = (url) => {
        return httpClient.get(apiUrl + url)
    }

    return {
        post, put, remove, get
    }
    
}

export default ApiService
