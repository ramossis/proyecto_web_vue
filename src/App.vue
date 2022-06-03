<template>
  <div id="app">
    <div id="wrapper">
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand" href="index.html">CYBERDINDE SYSTEMS VENTAS Y REGISTROS</router-link>
                </div>

                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <ul class="nav navbar-nav navbar-left navbar-top-links">
                    <li><a href="#"><i class="fa-solid fa-indent"></i> Website</a></li>
                </ul>

                <ul class="nav navbar-right navbar-top-links">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-user fa-fw"></i> Usuario 1 <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#"><i class="fa fa-user fa-fw"></i> Usuario </a>
                            </li>
                            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Configuracion</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Cerrar Sesion</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li class="sidebar-search">
                                <div class="input-group custom-search-form">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                                
                            </li>
                            <li>
                                <router-link to="/"><i class="fa fa-dashboard fa-fw"></i>Escritorio</router-link>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-tags" aria-hidden="true"></i> Almacen<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="#"><i class="fa fa-tags" aria-hidden="true"></i> Articulos</a>
                                    </li>
                                    <li>
                                        <a href="#"> <i class="fa fa-circle-o" aria-hidden="true"></i> Categorias</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Compras<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Ingresos</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Proveedores</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-money" aria-hidden="true"></i> Ventas<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Ventas</a>
                                    </li>
                                    <li>
                                        <router-link to="/registroUsuario"><i class="fa fa-circle-o" aria-hidden="true"></i> Clientes</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="active">
                                <a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i> Ayuda<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a class="active" href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Acerca de..</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-circle-o" aria-hidden="true"></i> Ayuda</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>