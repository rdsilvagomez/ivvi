 
import {Component, Input, OnDestroy,OnInit} from '@angular/core';
 import { usuarioServicio }                 from '../../Servicios/usuarios';
 import { usuario  }            		    from '../../clases/usuarios';
 import { listadoUsuario }                  from '../../clases/usuarios';
@Component({
  	moduleId: module.id,
    selector: 'usuarios',
    templateUrl: '../../views/usuarios/usuarios.html'
})
export class UsuariosComponent implements  OnInit {  
	listado: listadoUsuario; 
	page:number = 1 ; 
	constructor (private srvUsr:usuarioServicio) {
	
		

	}

	ngOnInit() :void
	{
		this.cargarUsuarios(); 
	}
 
	cargarUsuarios()
	{
	 
		this.srvUsr.getListadoUsuario(this.page ).subscribe(res=> this.listado= res); 
	}

	actualizarUsuario(rec:usuario)
	{
		this.srvUsr.actualizarUsuario(rec).subscribe(res=>{


		}); 


	}
	public pageChanged(event:any):void 
	{
		this.cargarUsuarios(); 

	}

}
