import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Personal from '@/pages/personal/Personal'
import Detail from '@/pages/detail/Detail'
import Search from '@/pages/search/Search'
import Login from '@/pages/login/Login'
import Logined from '@/pages/login/components/Logined'
import Register from '@/pages/login/components/Register'
import Collection from '@/pages/collection/Collection'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive: true
    }

  }, {
    path: '/personal',
    name: 'Personal',
    component: Personal

  },  {
    path: '/collection',
    name: 'Collection',
    component: Collection,
  },  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail

  },  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{
      keepAlive: true
    }

  },  {
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: '/logined',
    children: [
      {
        path: '/logined',
        name: 'Logined',
        component: Logined,
      }, {
        path: '/register',
        name: 'Register',
        component: Register,
      }
    ]
  }]
})
