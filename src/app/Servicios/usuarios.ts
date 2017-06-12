import { Injectable }                 from '@angular/core';
import { Headers, Http }              from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { response }                   from '../clases/response';
import { usuario  }                   from '../clases/usuarios';
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

        getListadoUsuario (page:any  ):Observable<listadoUsuario>
        {
		 
            
            return this.http.get(this.Url.concat("/list?page=").concat( page)) 
			               .map(response => response.json() as listadoUsuario);
        }
        ingresarUsuario()
        { }
        asociarProveedor()
        { }


        actualizarUsuario(reg:usuario) :Observable<response>
        {

            return this.http.post(this.Url.concat("/actualizar") ,JSON.stringify(reg),{headers: this.headers})
                            .map((res) => res.json() as response)
                             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        }



}