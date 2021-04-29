import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../Modelo/Curso'
//import { Colegio } from '../Modelo/Colegio'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicecursoService {

  constructor( private http:HttpClient){}
 
    Url='http://localhost:8889/curso';
  
    getCursos(){
      return this.http.get<Curso[]>(this.Url+'/all'); 
    }

    createCursos(curso:Curso){
        return this.http.post<Curso>(this.Url+'/save',curso); 
    }

    getCursoId(id:number){
      return this.http.get<Curso>(this.Url+'/'+id); 
    }

    updateCurso(curso:Curso){
      return this.http.put<Curso>(this.Url+'/update/'+curso.id ,curso); 
    }

    deleteCurso(curso:Curso){
      return this.http.delete<Curso>(this.Url+'/delete/'+curso.id); 
    }

    /*
    private URL_API = "https://restcountries.eu/rest/v2/all";
    URL_API:'http://localhost:8889/colegio/all';
    
    getAllCountries(): Observable<any[]> {
      return this.http.get<any[]>(this.URL_API);
    }
    */
}

