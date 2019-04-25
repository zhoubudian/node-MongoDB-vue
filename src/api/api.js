import axios from 'axios'
// 后端接口
let base = 'http://localhost:3000'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user != null && user.token !== '') { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = user.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.retCode != null && response.data.retCode === 401) {
      localStorage.removeItem('user')
      location.replace('/')
    } else {
      return response
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('user')
          location.replace('/login')
        // case 403:
        //     location.replace('/404');
      }
    }
    return Promise.reject(error.response.data)
  })

