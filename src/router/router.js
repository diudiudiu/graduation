import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import login from "../components/login/login"
import articleBody from '../components/blog/card/article-body'
import jsonStyle from '../components/blog-list/json-style'
import mycv from '../components/remuse/myCV'
import bookmark from '../components/blog/card/bookmark'
import comment from '../components/comment/comment'
import topHeader from '../components/common/top-header'
import cvGroup from '../components/info-table/cv-group'
import cvForm from '../components/remuss-form/cv-form'

// page 页面
import main from '../page/main'
import notFind from '../components/404/not-find'
import follow from '../page/follow-fan'
import bloglist from '../page/blog-list'
import remuse from '../page/remuse-show'
import blogcontrol from '../page/blog-control'
import remusecontrol from '../page/remuse-control'
import infocenter from '../page/info-center'
import article from '../page/article'





Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/',
      name: 'main',
      component: main
      // redirect: '/main'
    },
    {
      path: '/follow',
      name: 'follow',
      component: follow
    },
    {
      path: '/blogList',
      name: 'blogList',
      component: bloglist
    },
    {
      path: '/infocenter',
      name: 'infocenter',
      component: infocenter
    },
    {
      path: '/blogcontrol',
      name: 'blogcontrol',
      component: blogcontrol
    },
    {
      path: '/remuse',
      name: 'remuse',
      component: remuse
    },
    {
      path: '/remusecontrol',
      name: 'remusecontrol',
      component: remusecontrol
    },
    {
      path: '*',
      name: 'notFind',
      component: notFind
    }
  ]
  
})
