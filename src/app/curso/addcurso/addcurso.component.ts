import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicecursoService } from '../Service/servicecurso.service';
import { Curso } from '../Modelo/Curso';
//implementacion de Dropdownlist
//import { Colegio } from '../Modelo/Colegio';
import { Observable } from "rxjs";

@Component({
  selector: 'app-addcurso',
  templateUrl: './addcurso.component.html',
  styleUrls: ['./addcurso.component.css']//,
  //providers: [DataService]
})
export class AddcursoComponent implements OnInit {

  public keyword = "name";

  public data$: Observable<any[]>;
  public keywords = ["name", "capital", "region"];

  constructor(private router:Router,private service:ServicecursoService) {
    //getData(): 
   }

   /*
   //Implementacion autocomplete
   getData(): void {
    this.data$ = this.service.getAllCountries();
  }
  */

  ngOnInit(): void {
  }

  curso:Curso = new Curso();
    Guardar(curso:Curso){

      this.curso = curso
      this.service.createCursos(this.curso)
      .subscribe(data=>{
      alert("Se ha agregado con exito..!"+this.curso);
      this.router.navigate(["listcurso"]);
 
    } 
    )
  }
 

}
