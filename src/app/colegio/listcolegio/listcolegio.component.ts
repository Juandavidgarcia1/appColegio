import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditcolegioComponent } from '../editcolegio/editcolegio.component';
import { Colegio} from '../Modelo/Colegio';
import { ServicecolegioService } from '../Service/servicecolegio.service';

@Component({
  selector: 'app-listcolegio',
  templateUrl: './listcolegio.component.html',
  styleUrls: ['./listcolegio.component.css']
})
export class ListcolegioComponent implements OnInit {

  colegios:Colegio[];
  constructor(private http:ServicecolegioService, private router:Router) { }

  ngOnInit(): void {
    this.http.getColegio().subscribe(data=>{ this.colegios=data})
  }

  Editar(colegio:Colegio):void{
    localStorage.setItem("idColegio",colegio.id.toString());
    this.router.navigate(["editcolegio"]);
  } 


}
