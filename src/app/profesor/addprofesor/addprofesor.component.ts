import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceprofesorService } from '../Service/serviceprofesor.service';
import { Profesor } from '../Modelo/Profesor';

@Component({
  selector: 'app-addprofesor',
  templateUrl: './addprofesor.component.html',
  styleUrls: ['./addprofesor.component.css']
})
export class AddprofesorComponent implements OnInit {

  constructor(private router:Router,private service:ServiceprofesorService) { }
  
  ngOnInit(): void {
  }

  profesor:Profesor = new Profesor();
  //Guardar(estudiante:Estudiante){
    Guardar(profesor:Profesor){

      this.profesor = profesor
      this.service.createProfesor(this.profesor)
      .subscribe(data=>{
      alert("Se ha agregado con exito a "+this.profesor.nombre);
      this.router.navigate(["listprofesor"]);
 
    } 
    )
  }

}
