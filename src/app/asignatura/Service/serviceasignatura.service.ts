import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../Modelo/Asignatura'

@Injectable({
  providedIn: 'root'
})
export class ServiceasignaturaService {
  constructor( private http:HttpClient){}
 
  Url='http://localhost:8889/asignatura';

  getAsignaturas(){
    return this.http.get<Asignatura[]>(this.Url+'/all'); 
  }

  createAsignaturas(asignatura:Asignatura){
      return this.http.post<Asignatura>(this.Url+'/save',asignatura); 
  }

  getAsignaturaId(id:number){
    return this.http.get<Asignatura>(this.Url+'/'+id); 
  }

  updateAsignatura(asignatura:Asignatura){
    return this.http.put<Asignatura>(this.Url+'/update/'+asignatura.id ,asignatura); 
  }

  deleteAsignatura(asignatura:Asignatura){
    return this.http.delete<Asignatura>(this.Url+'/delete/'+asignatura.id); 
  }


}
