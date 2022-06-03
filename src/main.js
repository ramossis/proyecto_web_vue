import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import usuario from './components/registroUsuario.vue'
import index from './components/index.vue'
Vue.use(VueRouter)
const routes=[
  {
    path:'/registroUsuario',component:usuario
  },
  {
    path:'/',component:index
  }
]
const router=new VueRouter({
  routes
})
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
