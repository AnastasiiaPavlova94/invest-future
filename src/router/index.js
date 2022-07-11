import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/invest-section',
    name: 'InvestSection',
    component: () => import('../views/InvestSection.vue')
  },
  {
    path: '/about-section',
    name: 'AboutSection',
    component: () => import('../views/AboutSection.vue')
  },
  {
    path: '/portfolio-section',
    name: 'PortfolioSection',
    component: () => import('../views/PortfolioSection.vue')
  },
  {
    path: '/service-section',
    name: 'ServiceSection',
    component: () => import('../views/ServiceSection.vue')
  },
  {
    path: '/contact-section',
    name: 'ContactSection',
    component: () => import('../views/ContactSection.vue')
  },
  {
    path: '/blog-section',
    name: 'BlogSection',
    component: () => import('../views/BlogSection.vue')
  },
  {
    path: '/blog-card/:title',
    name: 'BlogCard',
    component: () => import('../views/BlogCard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
