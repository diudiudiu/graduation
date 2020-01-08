// import { resolve } from 'url'
// import qs from 'qs'
import service from './service'
import  api from './api'
class Request {
  constructor () {
    // 其他模块会调用
    // this.pptUploadUrl = resolve(api.gateway, api.uploadPPT)
    // this.pptQueryUrl = resolve(api.gateway, api.queryPPT)
    // this.pptDownloadUrl = resolve(api.gateway, api.downloadPPT)
    this.api = api
  }
  getSysTime () {
    return service.request({
      url: this.api.getSysTime,
      method: 'get'
    })
  }
  // (未登陆)   此headers加字段 languageType 简繁的类型
  getLoginCitys (headers) {
    return service.request({
      url: this.api.getLoginCitys,
      headers
    })
  }
  // (未登陆) 查询直播间联动数据  此headers加字段 languageType 简繁的类型
  getLiveRoomList (headers) {
    return service.request({
      url: this.api.getLiveRoomList,
      method: 'get',
      headers
    })
  }
  // login (params) {
  //   let headers = {}
  //   let data = params
  //   if (store.getters.subjectType === 1) {
  //     headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  //     data = qs.stringify(params)
  //     this.api = shuangshiApi
  //   } else if (store.getters.subjectType === 2) {
  //     this.api = zaixianApi
  //   }
  //   return service.request({
  //     url: this.api.login,
  //     method: 'post',
  //     headers: headers,
  //     data: data
  //   })
  // }
  // 获取阿里云临时token
  getOSStmpToken () {
    return service.get(api.getOSStmpToken)
  }
  // logout (params) {
  //   return service.request({
  //     url: this.api.logout,
  //     method: 'post',
  //     // transformRequest: [(data) => {
  //     //   let ret = ''
  //     //   for (let it in data) {
  //     //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  //     //   }
  //     //   return ret
  //     // }],
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //     data: qs.stringify(params)
  //   })
  // }
  // 获取新手引导信息
  getBoot (params) {
    return service.get(api.getBoot, { params: params })
  }
  // 更新老师引导信息
  addBoot (params) {
    return service.request({
      url: this.api.addBoot,
      data: params,
      method: 'post'
    })
  }
  getCommonLectureInfo () {
    return service.get(api.getCommonLectureInfo)
  }
  getThirdInfo (url) {
    return service.request({
      url: url + '?v=' + new Date().getTime(),
      method: 'get'
    })
  }
  getCurrentClass (params) {
    return service.request({
      url: this.api.currentClass,
      params: params
    })
  }
  // 授课缩略图
  getPageImage (params) {
    return service.request({
      url: this.api.pageImage,
      params: params
    })
  }
  // 获取课件的所有页id信息
  getPageInfos (params) {
    return service.request({
      url: this.api.pageInfos,
      params: params
    })
  }
  // 导航信息
  pageChange (params) {
    return service.request({
      url: this.api.pageChange,
      method: 'post',
      data: params
    })
  }
  exitCourseware (params) {
    return service.request({
      url: this.api.exitCourseware,
      params: params
    })
  }
  playCourseware (params) {
    return service.request({
      method: 'post',
      url: this.api.playCourseware,
      data: params
    })
  }
  coursewareHeart (params) {
    return service.request({
      url: this.api.coursewareHeart,
      params: params,
      nologger: true
    })
  }
  keepTeaching (params) {
    return service.request({
      url: this.api.keepTeaching,
      params: params
    })
  }
  getTeachingStatus (params) {
    return service.request({
      url: this.api.getTeachingStatus,
      params: params
    })
  }
  endTeachingStatus (params) {
    return service.request({
      url: this.api.endTeachingStatus,
      params: params
    })
  }
  // 获取分享吗
  cloudCreate (params) {
    return service.request({
      url: this.api.cloudCreate,
      data: params,
      method: 'post'
    })
  }
  getCourseList (params) {
    return service.request({
      url: this.api.courseList,
      params: params
    })
  }
  setStarStatus (params) {
    return service.request({
      url: this.api.star,
      params: params
    })
  }
  renameCourseware (params) {
    return service.request({
      url: this.api.rename,
      method: 'post',
      data: params
    })
  }
  
  
}
export default new Request()
