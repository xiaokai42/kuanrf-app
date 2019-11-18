import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: resolve => require(['@/views/Home.vue'], resolve)
  },
  {
    path: '/',
    component: resolve => require(['@/views/Menu.vue'], resolve),
    meta: { title: '自述文件' },
    children:
    [
      {
        path: '/brand',
        component: resolve => require(['@/views/page/Brand.vue'], resolve),
        meta: { title: '品牌介绍' }
      },
      {
        path: '/care',
        component: resolve => require(['@/views/page/Care.vue'], resolve),
        meta: { title: '母婴照护' }
      },
      {
        path: '/repair',
        component: resolve => require(['@/views/page/Repair.vue'], resolve),
        meta: { title: '产后修复' }
      },
      {
        path: '/recruit',
        component: resolve => require(['@/views/page/Recruit.vue'], resolve),
        meta: { title: '人才招聘' }
      },
      {
        path: '/active',
        component: resolve => require(['@/views/page/Active.vue'], resolve),
        meta: { title: '最新优惠' }
      }
    ]
  }]
})
