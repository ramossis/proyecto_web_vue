<template>
<div class="app">
<div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header">Bienvenido</h1>
                            <p class="text-secondary">
                                Bienvenido al Sistema de Ventas y registros de CYBERINDE 
                                Systems aqui puede ver el registro diario de ventas,accesos directos a las distintas 
                                funcionalidades del Sistema.
                            </p>
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="panel panel-primary">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-3">
                
                                                <i class="fa-solid fa-cart-shopping fa-5x"></i>
                                                </div>
                                                <div class="col-xs-9 text-right">
                                                    <div class="huge">##</div>
                                                    <div>Ventas Diarias</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div class="panel-footer">
                                                <span class="pull-left">Ver Detalles</span>
                                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
        
                                                <div class="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="panel panel-green">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-3">
                                                    <i class="fa fa-tasks fa-5x"></i>
                                                </div>
                                                <div class="col-xs-9 text-right">
                                                    <div class="huge">##</div>
                                                    <div>Compras</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div class="panel-footer">
                                                <span class="pull-left">Ver Detalles</span>
                                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>

                                                <div class="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="panel panel-yellow">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xs-3">
                                                    <i class="fa fa-print fa-5x" aria-hidden="true"></i>
                                                </div>
                                                <div class="col-xs-9 text-right">
                                                    <div class="huge">##</div>
                                                    <div>Caja Actual</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#">
                                            <div class="panel-footer">
                                                <span class="pull-left">Ver Detalles</span>
                                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
        
                                                <div class="clearfix"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <router-view></router-view>
</div>
</template>