// import { resolve } from 'url'
import qs from 'qs'
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
  getArticle(params) {
    return service.request({
      url: this.api.getArticle,
      data: qs.stringify(params),
      method: 'post'
    })
  }

  getLoginCitys (headers) {
    return service.request({
      url: this.api.getLoginCitys,
      headers
    })
  }
  getLiveRoomList (headers) {
    return service.request({
      url: this.api.getLiveRoomList,
      method: 'get',
      headers
    })
  }
  
  // 获取阿里云临时token
  getOSStmpToken () {
    return service.get(api.getOSStmpToken)
  }
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
