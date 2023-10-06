import axios from 'axios'
import { CURRENT_BASE_URL } from './constants'

export class HttpClient {
  instance

  createInstance () {
    this.instance = axios.create({
      baseURL: CURRENT_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.initializeResponseInterceptor()
    return this.instance
  }

  initializeResponseInterceptor = () => {
    this.instance?.interceptors.response.use(this.handleResponse, this.handleError)
    const token = 'some token'
    this.instance?.interceptors.request.use((config) => {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
      return config
    })
  }

  handleResponse = ({ data }) => data

  handleError = (error) => Promise.reject(error)
}
