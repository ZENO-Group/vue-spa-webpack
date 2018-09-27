import request from '@/utils/request'

export function loginByUsername (username, password) {
  return request({
    url: '', // todo: replace with loginByUsername url
    method: 'post',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    auth: {
      username: 'username',
      password: 'password'
    },
    params: {
      password: password,
      username: username,
      grant_type: 'password'
    }
  })
}

export function logout () {
  return request({
    url: '', // todo: replace with logout url
    method: 'post',
    data: {}
  })
}

export function getUserInfo () {
  return request({
    url: '', // todo: replace with getUserInfo url
    method: 'post',
    data: {}
  })
}
