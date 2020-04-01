import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'
import Publications from '../views/Publications'
import SocialResponsability from '../views/SocialResponsability'
import OurTeam from '../views/OurTeam'
import Internal from '../views/Internal'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/publicaciones',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/nosotros',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/responsabilidad-social',
    name: 'SocialResponsability',
    component: SocialResponsability
  },
  {
    path: '/empresa/:empresa',
    name: 'Internal',
    component: Internal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
