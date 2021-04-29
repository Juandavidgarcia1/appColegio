import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceestudianteService } from '../Service/serviceestudiante.service';
import { Estudiante } from '../Modelo/Estudiante';

@Component({
  selector: 'app-addestudiante',
  templateUrl: './addestudiante.component.html',
  styleUrls: ['./addestudiante.component.css']
})
export class AddestudianteComponent implements OnInit {

  constructor(private router:Router,private service:ServiceestudianteService) { 
 
  }

  ngOnInit(): void {
  }


  estudiante:Estudiante = new Estudiante();
  //Guardar(estudiante:Estudiante){
    Guardar(estudiante:Estudiante){

      this.estudiante = estudiante
      this.service.createEstudiantes(this.estudiante)
      .subscribe(data=>{
      alert("Se ha agregado con exito a "+this.estudiante.nombre);
      this.router.navigate(["listestudiante"]);
 
    } 
    )
  }
 
}
