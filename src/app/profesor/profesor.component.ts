import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listprofesor"]); 
  }
  Nuevo(){
    this.router.navigate(["addprofesor"]);
  }

  ngOnInit(){

  }

}
