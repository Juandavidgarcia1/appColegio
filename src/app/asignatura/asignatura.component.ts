import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {
  title = 'Aplicaciones en angular';
  
    nombre = " hola mundo";
    descripcion = " hola inframundo";
  
    constructor(private router:Router){}
    
    //constructor(private router:Router, private http:HttpClient){}
  
    Listar(){
      this.router.navigate(["listasignatura"]); 
    }
    Nuevo(){
      this.router.navigate(["addasignatura"]);
    }
  
    ngOnInit(){
 
    }
  }