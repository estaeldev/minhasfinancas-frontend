import axios from "axios";

function ApiService(props) {
    const apiUrl = props.apiUrl
    
    const httpClient = axios.create({
        baseURL: "http://localhost:8080"
    })
    
    const post = (url, objeto, config) => {
        return httpClient.post(apiUrl + url, objeto, config)
    }
    
    const put = (url, objeto) => {
        return httpClient.put(apiUrl + url, objeto)
    }

    const remove = (url) => {
        return httpClient.delete(apiUrl + url)
    }   

    const get = (url, config) => {
        return httpClient.get(apiUrl + url, config)
    }
    
    return {
        post, put, remove, get
    }
    
}

export default ApiService
