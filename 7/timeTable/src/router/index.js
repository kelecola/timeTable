import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import timeTable from '@/components/timeTable'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 路由的配置，类似于切换卡，点击跳转到timeTable
    {
      path: '/timeTable',
      name: 'timeTable',
      component: timeTable
    }
  ]
  // dev: {
  //   env: require('./dev.env'),
  //   port: 8090,
  //   autoOpenBrowser: true,
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   proxyTable: {
  //     '/api': {
  //       target: 'http://weixt.spacetech.com.cn',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/weixt/api/schedule_listForStudent'
  //       }
  //     }
  //   }
  // }
})
