import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicecursoService } from '../Service/servicecurso.service';
import { Curso } from '../Modelo/Curso';

@Component({
  selector: 'app-editcurso',
  templateUrl: './editcurso.component.html',
  styleUrls: ['./editcurso.component.css']
})
export class EditcursoComponent implements OnInit {

  curso:Curso = new Curso();

  constructor(private router:Router,private service:ServicecursoService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("idcurso");
   // console.log(id);
    this.service.getCursoId(+id)
    .subscribe(data=>{
      this.curso=data;
    })
  }

  Actualizar(curso:Curso){
    this.service.updateCurso(curso)
    .subscribe(data=>{
      this.curso = data;
      alert("Se actualizo con exito!"); 
      this.router.navigate(["listcurso"]); 
    })
  }

}
