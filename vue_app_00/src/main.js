// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
Vue.use(Mint)
Vue.config.productionTip = false

//2.引入 mui库样式文件
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//5引入axios库   52
import axios from "axios"
//6配置跨域访问保存session
axios.defaults.withCredentials=true;
//7将axios库配置Vue实例对象中
Vue.prototype.axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
