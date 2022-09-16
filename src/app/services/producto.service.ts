import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Productoes/';
  constructor(private http: HttpClient) { }
  getProducto(): Observable<producto[]>{
    return this.http.get<producto[]>(this.urlhost + this.urlApi);
  }
}
