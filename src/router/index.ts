import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CurrencyValueView from '../views/CurrencyValueView.vue'
import CurrencyExchangeView from '@/views/CurrencyExchangeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/value',
      name: 'value',
      component: CurrencyValueView
    },
    {
      path: '/',
      name: 'exchange',
      component: CurrencyExchangeView
    },
  ]
})

export default router
