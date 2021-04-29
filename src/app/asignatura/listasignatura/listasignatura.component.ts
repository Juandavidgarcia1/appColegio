import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditasignaturaComponent } from '../editasignatura/editasignatura.component';
import { Asignatura} from '../Modelo/Asignatura';
import { ServiceasignaturaService } from '../Service/serviceasignatura.service';

@Component({
  selector: 'app-listasignatura',
  templateUrl: './listasignatura.component.html',
  styleUrls: ['./listasignatura.component.css']
})
export class ListasignaturaComponent implements OnInit {
  asignaturas:Asignatura[];
  constructor(private http:ServiceasignaturaService, private router:Router) { }

  ngOnInit(): void {
    this.http.getAsignaturas().subscribe(data=>{ this.asignaturas=data})
  }

  Editar(asignatura:Asignatura):void{
    localStorage.setItem("idasignatura",asignatura.id.toString());
    this.router.navigate(["editasignatura"]);
 }
 
 Delete(asignatura:Asignatura){
  this.http.deleteAsignatura(asignatura)
  .subscribe(data=>{
    this.asignaturas= this.asignaturas.filter(p=>p!==asignatura);
    alert("Usuario eliminado...!");
  }) 
 }
}
