import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import usuario from './components/registroUsuario.vue'
import index from './components/index.vue'
import categorias from './components/listadoCategorias.vue'
import categoriasCrear from './components/crearCategorias.vue'
import login from './components/loginUsuario.vue'
import articulos from './components/listadoArticulos.vue'
Vue.use(VueRouter)
const routes=[
  {
    path:'/',component:login
  },
  {
    path:'/registroUsuario',component:usuario
  },
  {
    path:'/index',component:index
  },
  {
    path:'/categorias',component:categorias
  },
  {
    path:'/categoriasCrear',component:categoriasCrear
  },{
    path:'/articulos',component:articulos
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
