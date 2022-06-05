<template>
        <div class="app">
<div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="page-header">Listado Proveedores <router-link to="/proveedoresCrear"><button class="btn btn-success">Nuevo Proveedor</button></router-link></h1>
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    Gestion y Registro de Clientes
                                </div>
                                <!-- /.panel-heading -->
                                <div class="panel-body">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>C.I.</th>
                                                    <th>Nombre</th>
                                                    <th>Apellidos</th>
                                                    <th>Email</th>
                                                    <th>Telefono</th>
                                                    <th>Opciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd gradeX">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 4.0</td>
                                                    <td>Win 95+</td>
                                                    <td>************</td>
                                                    <td>**********</td>
                                                    <td>*************</td>
                                                    <td class="center">
                                                        <button type="submit" class="btn btn-info">Editar</button>
                                                        <button type="reset" class="btn btn-danger">Eliminar</button>
                                                    </td>
                                                </tr>

                                                <tr class="odd gradeX">
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 4.0</td>
                                                    <td>Win 95+</td>
                                                    <td>************</td>
                                                    <td>**********</td>
                                                    <td>*************</td>
                                                    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.panel-body -->
                            </div>
                            <!-- /.panel -->
                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                <!-- /.container-fluid -->
            </div>
            <!-- /#page-wrapper -->
</div>
</div>
</template>