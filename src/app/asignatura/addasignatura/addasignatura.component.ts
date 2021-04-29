import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceasignaturaService } from '../Service/serviceasignatura.service';
import { Asignatura } from '../Modelo/Asignatura';

@Component({
  selector: 'app-addasignatura',
  templateUrl: './addasignatura.component.html',
  styleUrls: ['./addasignatura.component.css']
})
export class AddasignaturaComponent implements OnInit {
  constructor(private router:Router,private service:ServiceasignaturaService) { }

  ngOnInit(): void {
  }

  asignatura:Asignatura = new Asignatura();
    Guardar(asignatura:Asignatura){

      this.asignatura = asignatura
      this.service.createAsignaturas(this.asignatura)
      .subscribe(data=>{
      alert("Se ha agregado con exito..!"+this.asignatura);
      this.router.navigate(["listasignatura"]);
 
    } 
    )
  }
 

}
