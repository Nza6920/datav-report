import axios from 'axios'

const service = axios.create({
  // 请求前缀
  baseURL: 'https://apis.imooc.com',
  // 超时时间
  timeout: 5000
})

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data) {
      return response.data
    } else {
      Promise.reject(new Error('请求失败'))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
