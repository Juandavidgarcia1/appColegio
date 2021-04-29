import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditcursoComponent } from '../editcurso/editcurso.component';
import { Curso} from '../Modelo/Curso';
import { ServicecursoService } from '../Service/servicecurso.service';

@Component({
  selector: 'app-listcurso',
  templateUrl: './listcurso.component.html',
  styleUrls: ['./listcurso.component.css']
})
export class ListcursoComponent implements OnInit {

  cursos:Curso[];
  constructor(private http:ServicecursoService, private router:Router) { }

  ngOnInit(): void {
    this.http.getCursos().subscribe(data=>{ this.cursos=data})
  }

  Editar(curso:Curso):void{
    localStorage.setItem("idcurso",curso.id.toString());
    this.router.navigate(["editcurso"]);
 }
 
 Delete(curso:Curso){
  this.http.deleteCurso(curso)
  .subscribe(data=>{
    this.cursos= this.cursos.filter(p=>p!==curso);
    alert("Usuario eliminado...!");
  }) 
 }
}
