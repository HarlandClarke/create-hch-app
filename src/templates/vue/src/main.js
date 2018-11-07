import Vue from 'vue'
import VueRouter from 'vue-router'
// import injector from 'vue-inject'
import routerSettings from './router'
import App from './App.vue'
import store from './store'

<%
if (framework === 'vuetify') { %>import
  './plugins/vuetify' < %
}
%>

const router = new VueRouter(routerSettings)

Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(injector)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
