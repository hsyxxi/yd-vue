import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home'
import details from '../components/details/details'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Home',component: Home},
    {path: '/details',component: details}
  ]
})
