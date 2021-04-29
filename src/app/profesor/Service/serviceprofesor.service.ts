import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor} from '../Modelo/Profesor'

@Injectable({
  providedIn: 'root'
})
export class ServiceprofesorService {

  constructor( private http:HttpClient){}
 
  Url='http://localhost:8889/profesor';
 
  getProfesor(){
    return this.http.get<Profesor[]>(this.Url+'/all'); 
  }
 
  createProfesor(profesor:Profesor){
      return this.http.post<Profesor>(this.Url+'/save',profesor); 
  }
 
  getProfesorId(id:number){
    return this.http.get<Profesor>(this.Url+'/'+id); 
  }
 
  updateProfesor(profesor:Profesor){
    return this.http.put<Profesor>(this.Url+'/update/'+profesor.id ,profesor); 
  }

   deleteProfesor(profesor:Profesor){
    return this.http.delete<Profesor>(this.Url+'/delete/'+profesor.id); 
  }
 
}
