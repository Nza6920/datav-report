import request from '../utils/request'


export function wordCloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get'
  })
}
