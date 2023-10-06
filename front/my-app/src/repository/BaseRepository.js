import { HttpClient } from '../HttpClient'
import { CURRENT_BASE_URL } from '../constants'

export class ApiResponse {
  data
  succeeded
  errors
}

const transform = (response) => {
  return new Promise((resolve, reject) => {
    const result = {
      data: response?.data,
      succeeded: response?.status === 200 || response?.status === 204,
      errors: response?.data?.errors
    }
    resolve(result)
  })
}

export class BaseRepository extends HttpClient {
  collection = 'person'

  async get (id) {
    const instance = this.createInstance()
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}/${id}`).then(transform)
    return result
  }

  async getMany () {
    const instance = this.createInstance()
    const result = await instance.get(`${CURRENT_BASE_URL}/${this.collection}`).then(transform)
    return result
  }

  async create (item) {
    const instance = this.createInstance()
    const result = await instance.post(`${CURRENT_BASE_URL}/${this.collection}`, item).then(transform)
    return result
  }

  async update (idperson, item) {
    const instance = this.createInstance()
    const result = await instance.put(`${CURRENT_BASE_URL}/${this.collection}/${idperson}`, item).then(transform)
    return result
  }

  async delete (idperson) {
    const instance = this.createInstance()
    const result = await instance.delete(`${CURRENT_BASE_URL}/${this.collection}/${idperson}`).then(transform)
    return result
  }
}
