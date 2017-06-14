import { Injectable, OnInit } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class utilService {
public rutaServicio:string =/*"ServerOptimizacionCompras/web/index.php";*/ "http://localhost:7080/ServerOptimizacionCompras/web/index.php"; 

}