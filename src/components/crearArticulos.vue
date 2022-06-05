<template>
 <div class="app">
<div id="page-wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Registro Articulos</h1>
            </div>
            
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Formulario de Registro de Articulos
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <form role="form">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>Nombres</label>
                                        <input class="form-control" placeholder="Ingresa Nombre">
                                        
                                    </div>
                                    <div class="form-group">
                                        <label>Codigo</label>
                                        <input class="form-control" placeholder="Ingresa Codigo">
                                    </div>
                                    <div class="form-group">
                                        <label>Descripcion</label>
                                        <input class="form-control" placeholder="Ingresa Descripcion">
                                    </div>
                                </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Categoria</label>
                                            <select name="" id="" class="form-control">
                                                <option value="####">###</option>
                                                <option value="####">###</option>
                                                <option value="###">###</option>
                                                <option value="##">##</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Stock</label>
                                            <input class="form-control" placeholder="Ingresa Stock">
                                        </div>
                                        <div class="form-group">
                                            <label>Imagen</label>
                                            <input type="file" class="form-control" placeholder="Ingresa Imagen">
                                        </div> 
                                    </div> 
                                    <div class="col-lg-12">
                                        <button type="submit" class="btn btn-primary">Registrar</button>
                                      <button type="reset" class="btn btn-danger">Cancelar</button>
                           
                                    </div>
                         </form>
                        </div>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>