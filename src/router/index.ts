import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: () =>
      import(/* webpackChunkName: "posts" */ '../views/PostsView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
