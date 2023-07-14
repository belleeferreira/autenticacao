import { api } from './axios'

export default function interceptors () {
  api.interceptors.request.use((request) => {
    console.log(request)
    return request
  })
}
