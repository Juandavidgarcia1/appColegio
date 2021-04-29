import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicecolegioService } from '../Service/servicecolegio.service';
import { Colegio } from '../Modelo/Colegio';

@Component({
  selector: 'app-addcolegio',
  templateUrl: './addcolegio.component.html',
  styleUrls: ['./addcolegio.component.css']
})
export class AddcolegioComponent implements OnInit {

  constructor(private router:Router,private service:ServicecolegioService) { }
  
  ngOnInit(): void {
  }

  colegio:Colegio = new Colegio();
  //Guardar(estudiante:Estudiante){
    Guardar(colegio:Colegio){

      this.colegio = colegio
      this.service.createColegio(this.colegio)
      .subscribe(data=>{
      alert("Se ha agregado con exito a "+this.colegio.nombre);
      this.router.navigate(["listcolegio"]);
 
    } 
    )
  }
}
