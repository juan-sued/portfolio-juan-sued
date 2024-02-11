import axios from 'axios'

export function getAPICLient() {
  const DEV_URL = 'http://localhost:3000/'

  const api = axios.create({
    baseURL: DEV_URL,
  })

  return api
}
