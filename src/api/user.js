// import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }

// request => axios
import request from '@/utils/request'

/**
 * 登录 API
 * @param {Object} data 登录需要的参数对象, 需要 mobile 和 password
 * @returns 请求的结果, promise 对象
 */
export function login(data) {
  // 用 axios 发请求
  // login().then()
  return request({ // axios 调用的结果是 promise 对象
    method: 'post',
    url: '/sys/login',
    data
  })
}

export function getInfo(token) {
}

export function logout() {
}
