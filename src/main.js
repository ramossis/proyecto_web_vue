import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import usuario from './components/registroUsuario.vue'
import index from './components/index.vue'
import categorias from './components/listadoCategorias.vue'
import categoriasCrear from './components/crearCategorias.vue'
import login from './components/loginUsuario.vue'
import articulos from './components/listadoArticulos.vue'
import articulosCrear from './components/crearArticulos.vue'
import clientes from './components/listadoClientes.vue'
import proveedores from './components/listadoProveedores.vue'
import proveedoresCrear from './components/crearProveedores.vue'
import ingreso from './components/listadoIngreso.vue'
import ingresoCrear from './components/crearIngreso.vue'
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
  },{
    path:'/articulosCrear',component:articulosCrear
  },{
    path:'/clientes',component:clientes
  },{
    path:'/proveedores',component:proveedores
  },{
    path:'/proveedoresCrear',component:proveedoresCrear
  },{
    path:'/ingresos',component:ingreso
  },{
    path:'/ingresoCrear',component:ingresoCrear
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
