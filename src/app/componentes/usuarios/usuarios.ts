 
import {Component, Input, OnDestroy,OnInit} from '@angular/core';
 import { usuarioServicio }                from '../../Servicios/usuarios';
 import { listadoUsuario }             from '../../clases/usuarios';
@Component({
  	moduleId: module.id,
    selector: 'usuarios',
    templateUrl: '../../views/usuarios/usuarios.html'
})
export class UsuariosComponent implements  OnInit {  
	listado: listadoUsuario; 
	constructor (private srvUsr:usuarioServicio) {
	
		

	}

	ngOnInit() :void
	{
		this.cargarUsuarios(); 
	}
 
	cargarUsuarios()
	{
		console.log('Inicio Cargar Usuario'); 
		this.srvUsr.getListadoUsuario().subscribe(res=> this.listado= res); 
	}


}
