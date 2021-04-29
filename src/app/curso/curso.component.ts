import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
    title = 'Aplicaciones en angular';
  
    constructor(private router:Router){}
    
    Listar(){
      this.router.navigate(["listcurso"]); 
    }
    Nuevo(){
      this.router.navigate(["addcurso"]);
    }
  
    ngOnInit(){
    }
  }