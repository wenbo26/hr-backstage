import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://ihrm-java.itheima.net/api',
  // baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

export default service
