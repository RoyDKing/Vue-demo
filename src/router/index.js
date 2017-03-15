import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由设置
export default new Router({
//  mode: 'history',
// mode: 'hash',
  //'hash'是默认模式   地址栏会有“#”
  routes: [
    {
      //设置默认页面
      //路由重定向： 刚进入页面就渲染home路由
      path: '/',
      redirect: '/home'
    },{
          path: '/home',
          //懒加载的方法
          component: resolve => require(['../views/Home.vue'], resolve),
    },{
          path: '/scroll',
          component: resolve => require(['../views/Scroll.vue'], resolve),
    },{
          path: '/message',
          component: resolve => require(['../views/Message.vue'], resolve)
    },{
          path: '/me',
          component: resolve => require(['../views/Me.vue'], resolve)
    },{
        path: '/me/profile',
        component: resolve => require(['../views/me/Profile.vue'], resolve)
    },{
        path: '/me/dongtai',
            component: resolve => require(['../views/me/DongTai.vue'], resolve)
    },{
        path: '/me/message',
            component: resolve => require(['../views/me/Message.vue'], resolve)
    },{
        path: '/me/collection',
        component: resolve => require(['../views/me/Collection.vue'], resolve)
    }
  ]
})
