import Vue from 'vue'
import VueRouter from 'vue-router'
import shouye from '../views/shouye.vue'
import xiaoxi from '../views/xiaoxi.vue'
import biji from '../views/biji.vue'
import wo from '../views/wo.vue'
import wodekecheng from '../views/wodekecheng.vue'
import denglu from '../views/denglu.vue'
import wodexiaozu from '../views/wodexiaozu.vue'
import qikan from '../views/qikan.vue'
import tushu from '../views/tushu.vue'
import baozhi from '../views/baozhi.vue'
import jiangzuo from '../views/jiangzuo.vue'
import gongcheng from '../views/gongcheng.vue'
import jidian from '../views/jidian.vue'
import shoujian from '../views/shoujian.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'shouye',
    component: shouye
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: xiaoxi
  },
  {
    path: '/biji',
    name: 'biji',
    component: biji
  },
  {
    path: '/wo',
    name: 'wo',
    component: wo
  },
  {
    path: '/wodekecheng',
    name: 'wodekecheng',
    component: wodekecheng
  },
  {
    path: '/denglu',
    name: 'denglu',
    component: denglu
  },
  {
    path: '/wodexiaozu',
    name: 'wodexiaozu',
    component: wodexiaozu
  },
  {
    path: '/qikan',
    name: 'qikan',
    component: qikan
  },
  {
    path: '/tushu',
    name: 'tushu',
    component: tushu
  },
  {
    path: '/baozhi',
    name: 'baozhi',
    component: baozhi
  },
  {
    path: '/jiangzuo',
    name: 'jiangzuo',
    component: jiangzuo
  },
  {
    path: '/gongcheng',
    name: 'gongcheng',
    component: gongcheng
  }
  ,
  {
    path: '/jidian',
    name: 'jidian',
    component: jidian
  }
  ,
  {
    path: '/shoujian',
    name: 'shoujian',
    component: shoujian
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
