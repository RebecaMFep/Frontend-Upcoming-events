import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth.js'
import AddEventView from '@/components/adminDashboard/AddEvent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/add-event',
      name: 'addevent',
      component: AddEventView,
    },
    // {
    //   path: '/modify-event',
    //   name: 'modifyevent',
    //   component: ModifyEventView,
    // },
  ]
})

router.beforeEach( (to,from) => {

  const store = useAuthStore()

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return { name: 'login'}
  }
})

export default router
