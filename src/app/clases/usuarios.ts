import { metadata } from './metadata';
export   class usuario {
	id:string; 
	username: string; 
	firstname:string; 
	lastname : string; 
	password:string; 
	role: string ; 
}

export class listadoUsuario {
	_meta : metadata;
	 data : usuario[];
	 success: boolean  ; 
}

