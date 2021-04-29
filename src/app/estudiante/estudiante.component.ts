import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit{
  title = 'Aplicaciones en angular';
 
    constructor(private router:Router){}
    
    Listar(){
      this.router.navigate(["listestudiante"]); 
    }
    Nuevo(){
      this.router.navigate(["addestudiante"]);
    }
    ngOnInit(){
  
    }
  }