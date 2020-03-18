import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  to.name !=  'login' && !localStorage.getItem('token') ? next('/login') : next() 
})

export default router
