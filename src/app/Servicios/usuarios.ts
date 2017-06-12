import { Injectable }                 from '@angular/core';
import { Headers, Http }              from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { response }                   from '../clases/response';
import { listadoUsuario }             from '../clases/usuarios';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { utilService }                from '../Servicios/util';
@Injectable()
export class usuarioServicio 
{
  		private Url :string ; 
	    private headers = new Headers({'Content-Type': 'application/json'});
	    
	    constructor(private http: Http,utilSrv :utilService) 
	    { 
        	this.Url= utilSrv.rutaServicio.concat("/usuario"); 
        }

        getListadoUsuario ():Observable<listadoUsuario>
        {
		    return this.http.get(this.Url.concat("/list"))
			               .map(response => response.json() as listadoUsuario);
        }
        ingresarUsuario()
        {

        }
        asociarProveedor()
        {


        }



}