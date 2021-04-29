import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceasignaturaService } from '../Service/serviceasignatura.service';
import { Asignatura } from '../Modelo/Asignatura';


@Component({
  selector: 'app-editasignatura',
  templateUrl: './editasignatura.component.html',
  styleUrls: ['./editasignatura.component.css']
})
export class EditasignaturaComponent implements OnInit {

  asignatura:Asignatura = new Asignatura();

  constructor(private router:Router,private service:ServiceasignaturaService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("idasignatura");
   // console.log(id);
    this.service.getAsignaturaId(+id)
    .subscribe(data=>{
      this.asignatura=data;
    })
  }

  Actualizar(asignatura:Asignatura){
    this.service.updateAsignatura(asignatura)
    .subscribe(data=>{
      this.asignatura = data;
      alert("Se actualizo con exito!"); 
      this.router.navigate(["listasignatura"]); 
    })
  }

}
