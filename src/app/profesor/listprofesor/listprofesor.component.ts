import { Component, OnInit } from '@angular/core';
import { EditprofesorComponent } from '../editprofesor/editprofesor.component';
import { Profesor} from '../Modelo/Profesor';
import { ServiceprofesorService } from '../Service/serviceprofesor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listprofesor',
  templateUrl: './listprofesor.component.html',
  styleUrls: ['./listprofesor.component.css']
})
export class ListprofesorComponent implements OnInit {
  
  profesores:Profesor[];
  constructor(private http:ServiceprofesorService, private router:Router) { }

  ngOnInit(): void {
    this.http.getProfesor()
    .subscribe(data=>{
       this.profesores=data;
      })
  }

  Editar(profesor:Profesor):void{
    localStorage.setItem("idProfesor",profesor.id.toString());
    this.router.navigate(["editprofesor"]);
  } 
  
  Delete(profesor:Profesor){
    this.http.deleteProfesor(profesor)
    .subscribe(data=>{
      this.profesores= this.profesores.filter(p=>p!==profesor);
      alert("Usuario eliminado...!");
    })

  } 
  

}
