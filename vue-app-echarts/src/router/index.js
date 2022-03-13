import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChartView from '@/views/ChartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/chartview',
    component: ChartView
  }
]

const router = new VueRouter({
  routes
})

export default router
