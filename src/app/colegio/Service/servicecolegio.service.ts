import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colegio} from '../Modelo/Colegio'
@Injectable({
  providedIn: 'root'
})
export class ServicecolegioService {
 
 constructor( private http:HttpClient){}
 
 Url='http://localhost:8889/colegio';

 getColegio(){
   return this.http.get<Colegio[]>(this.Url+'/all'); 
 }

 createColegio(colegio:Colegio){
     return this.http.post<Colegio>(this.Url+'/save',colegio); 
 }

 getColegioId(id:number){
   return this.http.get<Colegio>(this.Url+'/'+id); 
 }

 updateColegio(colegio:Colegio){
   return this.http.put<Colegio>(this.Url+'/update/'+colegio.id ,colegio); 
 }
}
