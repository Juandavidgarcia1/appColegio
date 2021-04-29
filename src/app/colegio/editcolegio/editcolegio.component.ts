import { Component, OnInit } from '@angular/core';
import { Colegio } from '../Modelo/Colegio';
import { Router } from '@angular/router';
import { ServicecolegioService } from '../Service/servicecolegio.service';

@Component({
  selector: 'app-editcolegio',
  templateUrl: './editcolegio.component.html',
  styleUrls: ['./editcolegio.component.css']
})
export class EditcolegioComponent implements OnInit {

  colegio:Colegio = new Colegio();

  constructor(private router:Router,private service:ServicecolegioService) { 
  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idColegio");
    this.service.getColegioId(+id)
    .subscribe(data=>{
      this.colegio=data;
    })
  }

  Actualizar(colegio:Colegio){
    this.service.updateColegio(colegio)
    .subscribe(data=>{
      this.colegio = data;
      alert("Se actualizo con exito!"); 
      this.router.navigate(["listcolegio"]);
    })
  }

}