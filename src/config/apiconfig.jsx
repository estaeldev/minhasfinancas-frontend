import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:9000",
    withCredentials: true
});

function ApiService(props) {
    const apiUrl = props.apiUrl
    
    const post = (url, objeto, config) => {
        return httpClient.post(apiUrl + url, objeto, config)
    }
    
    const put = (url, objeto) => {
        return httpClient.put(apiUrl + url, objeto)
    }

    const patch = (url, objeto, config) => {
        return httpClient.patch(apiUrl + url, objeto, config)
    }
    
    const remove = (url) => {
        return httpClient.delete(apiUrl + url)
    }   

    const get = (url, config) => {
        return httpClient.get(apiUrl + url, config)
    }

    return {
        post, put, remove, get, patch
    }

}

export function registrarToken(token) {
    if(token) {
        httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
}


export default ApiService
