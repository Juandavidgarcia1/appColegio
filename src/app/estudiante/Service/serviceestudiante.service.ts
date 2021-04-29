import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante} from '../Modelo/Estudiante'

@Injectable({
  providedIn: 'root'
})
export class ServiceestudianteService {

    //completaropcion ={}
    constructor( private http:HttpClient){}
 
    Url='http://localhost:8889/estudiante';
  
    getEstudiantes(){
      return this.http.get<Estudiante[]>(this.Url+'/all'); 
    }

    createEstudiantes(estudiante:Estudiante){
      //   Url='http://localhost:8889/estudiante/save';
        return this.http.post<Estudiante>(this.Url+'/save',estudiante); 
    }

    getEstudianteId(id:number){
     // console.log(id);
      return this.http.get<Estudiante>(this.Url+'/'+id); 
    }

    updateEstudiante(estudiante:Estudiante){
      return this.http.put<Estudiante>(this.Url+'/update/'+estudiante.id ,estudiante); 
    }
}

