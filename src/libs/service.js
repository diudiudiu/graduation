import { api } from './api'
import axios from 'axios'

const service = axios.create({
  baseURL: api.gateway,
  timeout: 10000
})
service.interceptors.request.use(config => {
  if (!config.nologger) {
    // logger.info('dynamicAxios request', config)
  }
  // config.headers = { ...store.getters.commonArgs, ...config.headers }
  return config
}, error => {
  // logger.error('dynamicAxios request error', error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (!response.config.nologger) {
    // logger.info('dynamicAxios response', response.data)
  }
  return response
}, error => {
  // logger.error('dynamicAxios response error', error)
  return Promise.reject(error)
})

export default service
