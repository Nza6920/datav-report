import axios from 'axios'

const service = axios.create({
  // 请求前缀
  baseURL: 'https://www.baidu.com/',
  // 超时时间
  timeout: 5000
})

export default service
