// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/base/reset.css'
import './assets/style/base/border.css'
import ElementUI from 'element-ui'
import VueSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/iconfont/iconfont.css'
import './assets/style/common/common.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueSwiper)
Vue.use(VueSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
