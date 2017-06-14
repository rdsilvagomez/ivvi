 
import {Component, Input, OnDestroy,OnInit} 		from '@angular/core';
 import { usuarioServicio }                 		from '../../Servicios/usuarios';
 import { usuario  }            		    		from '../../clases/usuarios';
 import { listadoUsuario }                  		from '../../clases/usuarios';
 import {NgbModal, ModalDismissReasons,NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Component({
  	moduleId: module.id,
    selector: 'usuarios',
    templateUrl: '../../views/usuarios/usuarios.html?v=${new Date().getTime()}'
})
export class UsuariosComponent implements  OnInit {  
	listado: listadoUsuario; 
    closeResult: string;
	page:number = 1 ; 
	modalMensaje : string =""; 
    esError      : number = 0 ; 
	NgbdrefIngreso:  NgbModalRef;  
	constructor (private srvUsr:usuarioServicio,private modalService : NgbModal ) {
	
		

	}

	ngOnInit() :void
	{
		this.cargarUsuarios(); 
	}
 
	cargarUsuarios()
	{
	 	this.srvUsr.getListadoUsuario(this.page ).subscribe(res=> this.listado= res); 
	}

	actualizarUsuario(contentMensajeConfirmacion:any,rec:usuario)
	{
		this.srvUsr.actualizarUsuario(rec).subscribe(res=>{
				if (res.success==true)	{
					 						   this.esError= 0; 
					 						   this.modalMensaje= "Usuario Actualizado Correctamente"; 
					 						   this.modalService.open(contentMensajeConfirmacion,{size:'lg'});
					 					}
				 					    else 
				 					    {       this.esError= 1; 
				 					    	    this.modalMensaje= res.message; 
				 					    		this.modalService.open(contentMensajeConfirmacion,{size:'lg'});
				 					    }
				 					    this.cargarUsuarios(); 
					});  


	}
	public pageChanged(event:any):void 
	{
		this.cargarUsuarios(); 

	}
	public opendgUsuario(contentIngresoUsuario:any) : void
	{

	this.NgbdrefIngreso= 	 this.modalService.open(contentIngresoUsuario,{size:'lg'});

	}
	public guardarUsuario (contentMensajeConfirmacion:any ,Nombres :any , Apellidos:any ,Usuario:any ,pwd:any ):void
	{
               this.srvUsr.ingresarUsuario(Nombres, Apellidos,Usuario,pwd  ).subscribe(res=>{ 
               						 if (res.success==true)
				 						{
					 						   this.esError= 0; 
					 						    
					 						   this.NgbdrefIngreso.close(); 
					 						   this.modalMensaje= "Usuario Creado Correctamente"; 
					 						   this.modalService.open(contentMensajeConfirmacion,{size:'lg'});
					 						  
				 						}
				 					    else 
				 					    {       this.esError= 1; 
				 					    	    this.modalMensaje= res.message; 
				 					    		this.modalService.open(contentMensajeConfirmacion,{size:'lg'});
				 					    }

				 					}   ); 


	} 

}
