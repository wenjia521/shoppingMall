import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/'
import Brand from '@/page/brand/'
import Resolution from '@page/resolution/'
import Experience from '@page/experience/'
import SupplyChain from '@page/supplyChain/'
import GoodsList from '@page/goodsList/'
import Detail from '@page/detail/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/resolution',
      name: 'resolution',
      component: Resolution
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/supplyChain',
      name: 'supplyChain',
      component: SupplyChain
    },
    {
      path: '/detail/:sightId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/goodsList/:ListId',
      name: 'goodsList',
      component: GoodsList
    }
  ]
})
