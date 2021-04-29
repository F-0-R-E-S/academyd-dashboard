import * as axios from 'axios'


const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

if (localStorage.accessToken) {
    headers.Authorization = `Bearer ${localStorage.accessToken}`
}


const customerInstance = axios.create({
    baseURL: 'https://coffee.slawek.dev/',
})

export default customerInstance
