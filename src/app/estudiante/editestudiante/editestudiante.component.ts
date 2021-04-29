import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../Modelo/Estudiante';
import { Router } from '@angular/router';
import { ServiceestudianteService } from '../Service/serviceestudiante.service';

@Component({
  selector: 'app-editestudiante',
  templateUrl: './editestudiante.component.html',
  styleUrls: ['./editestudiante.component.css']
})
export class EditestudianteComponent implements OnInit {

  estudiante:Estudiante = new Estudiante();

  constructor(private router:Router,private service:ServiceestudianteService) { 
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idEstudiante");
   // console.log(id);
    this.service.getEstudianteId(+id)
    .subscribe(data=>{
      this.estudiante=data;
    })
  }

  Actualizar(estudiante:Estudiante){
    this.service.updateEstudiante(estudiante)
    .subscribe(data=>{
      this.estudiante = data;
      alert("Se actualizo con exito!"); 
      this.router.navigate(["listestudiante"]); 
    })
  }

}
