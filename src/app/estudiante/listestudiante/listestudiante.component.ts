import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditestudianteComponent } from '../editestudiante/editestudiante.component';
import { Estudiante} from '../Modelo/Estudiante';
import { ServiceestudianteService } from '../Service/serviceestudiante.service';

@Component({
  selector: 'app-listestudiante',
  templateUrl: './listestudiante.component.html',
  styleUrls: ['./listestudiante.component.css']
})
export class ListestudianteComponent implements OnInit {

  estudiantes:Estudiante[];
  constructor(private http:ServiceestudianteService, private router:Router) { }

  ngOnInit(): void {
    this.http.getEstudiantes().subscribe(data=>{ this.estudiantes=data})
  }

  Editar(estudiante:Estudiante):void{
    localStorage.setItem("idEstudiante",estudiante.id.toString());
    
   
    this.router.navigate(["editestudiante"]);
  } 


}
