import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
        return import('../views/Home.vue')
      }
  },
  {
    path: '/setting',
    name: 'setting',
    component: function () {
      return import('../views/Setting.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
