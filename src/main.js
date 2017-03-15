// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

//启用vue-resource
Vue.use(VueResource);
//vue-resource设置
Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'static/data' : '/static/data'
// development
// static/data是json的路径   把json放在src文件夹里会出错（先查找了json，但是浏览器在之后才加载json）
Vue.http.options.emulateJSON = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

//导航钩子
//router.afterEach((route) => {
//     console.log('1')
//})
