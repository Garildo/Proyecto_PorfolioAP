import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experiencia-laboral';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaLaboralService {
  /*expURL = 'https://app-backend-testdemo.herokuapp.com/explab/';*/
  expURL = 'http://localhost:8080/explab/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<ExperienciaLaboral[]>{
    return this.httpClient.get<ExperienciaLaboral[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaLaboral> {
    return this.httpClient.get<ExperienciaLaboral>(this.expURL + `detail/${id}`); //comillas a las izquierda (tecla "}")//
  } 

  public save(experiencia: ExperienciaLaboral): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: ExperienciaLaboral): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
