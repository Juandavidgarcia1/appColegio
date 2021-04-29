import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.component.html',
  styleUrls: ['./colegio.component.css']
})
export class ColegioComponent implements OnInit {
title = 'Aplicaciones en angular';
nombre = " hola mundo";
descripcion = " hola inframundo";

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listcolegio"]); 
  }
  Nuevo(){
    this.router.navigate(["addcolegio"]);
  }

  ngOnInit(){

  }
}
