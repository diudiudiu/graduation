import api from './api'
import axios from 'axios'


const service = axios.create({
  baseURL: api.gateway,
  timeout: 10000
})
service.interceptors.request.use(config => {
  console.error(config)
  config.headers = {
    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
  return config
}, error => {
  // logger.error('dynamicAxios request error', error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (!response.config.nologger) {
    // logger.info('dynamicAxios response', response.data)
  }
  console.error('response ',response )
  return response
}, error => {
  console.error('error',error)
  // logger.error('dynamicAxios response error', error)
  return Promise.reject(error)
})

export default service
