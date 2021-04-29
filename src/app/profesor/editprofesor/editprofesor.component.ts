import { Component, OnInit } from '@angular/core';
import { Profesor } from '../Modelo/Profesor';
import { Router } from '@angular/router';
import { ServiceprofesorService } from '../Service/serviceprofesor.service';

@Component({
  selector: 'app-editprofesor',
  templateUrl: './editprofesor.component.html',
  styleUrls: ['./editprofesor.component.css']
})
export class EditprofesorComponent implements OnInit {

  profesor:Profesor = new Profesor();

  constructor(private router:Router,private service:ServiceprofesorService) { 
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idProfesor");
    this.service.getProfesorId(+id)
    .subscribe(data=>{
      this.profesor=data;
    })
  }

  Actualizar(profesor:Profesor){
    this.service.updateProfesor(profesor)
    .subscribe(data=>{
      this.profesor = data;
      alert("Se actualizo con exito!"); 
      this.router.navigate(["listprofesor"]);
    })
  }

}
