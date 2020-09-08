import Vue from 'vue'
import VueRouter from 'vue-router'
import BorderRadius from '../views/BorderRadius.vue'
import BoxShadow from '../views/BoxShadow.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: BorderRadius },
  { path: '/boxShadow', component: BoxShadow },
  { path: '*', component: Error404 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
