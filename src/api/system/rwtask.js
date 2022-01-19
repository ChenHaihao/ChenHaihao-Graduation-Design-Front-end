import request from '@/utils/request'

// 查询任务列表
export function listRwtask(query) {
  return request({
    url: '/system/rwtask/list',
    method: 'get',
    params: query
  })
}

// 查询任务详细
export function getRwtask(rwtaskId) {
  return request({
    url: '/system/rwtask/' + rwtaskId,
    method: 'get'
  })
}

// 新增任务
export function addRwtask(data) {
  return request({
    url: '/system/rwtask',
    method: 'post',
    data: data
  })
}

// 修改任务
export function updateRwtask(data) {
  return request({
    url: '/system/rwtask',
    method: 'put',
    data: data
  })
}

// 删除任务
export function delRwtask(rwtaskId) {
  return request({
    url: '/system/rwtask/' + rwtaskId,
    method: 'delete'
  })
}

// 导出任务
export function exportRwtask(query) {
  return request({
    url: '/system/rwtask/export',
    method: 'get',
    params: query
  })
}