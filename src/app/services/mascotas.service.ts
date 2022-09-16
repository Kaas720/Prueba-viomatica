import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mascotas} from 'src/app/interfaces/Mascotas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private urlhost: string = environment.endpoint;
  private urlApi: string = 'api/Mascotas/';
  constructor(private http: HttpClient) { }
  getMascotas(): Observable<mascotas[]>{
    return this.http.get<mascotas[]>(this.urlhost + this.urlApi);
  }
  postMascotas(mascotass : mascotas) : Observable<mascotas[]> {
    return this.http.post<mascotas[]>(this.urlhost + this.urlApi,mascotass);
  }
}
