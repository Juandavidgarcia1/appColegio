import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent} from './layout/layout.component';
//Rutas crud colegios
import { ColegioComponent } from './colegio/colegio.component';
import { AddcolegioComponent } from './colegio/addcolegio/addcolegio.component';
import { EditcolegioComponent } from './colegio/editcolegio/editColegio.component';
import { ListcolegioComponent } from './colegio/listcolegio/listcolegio.component';
//Rutas crud estudiante
import { EstudianteComponent } from './estudiante/estudiante.component';
import { AddestudianteComponent } from './estudiante/addestudiante/addestudiante.component';
import { EditestudianteComponent } from './estudiante/editestudiante/editestudiante.component';
import { ListestudianteComponent } from './estudiante/listestudiante/listestudiante.component';
//Rutas crud profesor
import { ProfesorComponent } from './profesor/profesor.component';
import { AddprofesorComponent } from './profesor/addprofesor/addprofesor.component';
import { EditprofesorComponent } from './profesor/editprofesor/editprofesor.component';
import { ListprofesorComponent } from './profesor/listprofesor/listprofesor.component';

//Rutas crud curso
import { CursoComponent } from './curso/curso.component';
import { AddcursoComponent } from './curso/addcurso/addcurso.component';
import { EditcursoComponent } from './curso/editcurso/editcurso.component';
import { ListcursoComponent } from './curso/listcurso/listcurso.component';
//Rutas crud asignatura
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { AddasignaturaComponent } from './asignatura/addasignatura/addasignatura.component';
import { EditasignaturaComponent } from './asignatura/editasignatura/editasignatura.component';
import { ListasignaturaComponent } from './asignatura/listasignatura/listasignatura.component';

const routes: Routes = [

  //vistas anidadas en el paht=''
  //redirecciona a la pagina del home
  {path:'',
  component:LayoutComponent,
  children:[ //todos los que se van anidar en el layout
    {
      path:'',
      redirectTo: '/home', //
      pathMatch: 'full'
    },
    {path:'home',component:HomeComponent},
    //ruta colegio
    {path:'colegio',component:ColegioComponent},
    {path:'addcolegio',component:AddcolegioComponent},
    {path:'editcolegio',component:EditcolegioComponent},
    {path:'listcolegio',component:ListcolegioComponent},
    //ruta estudiante
    {path:'estudiante',component:EstudianteComponent},
    {path:'addestudiante',component:AddestudianteComponent},
    {path:'editestudiante',component:EditestudianteComponent},
    {path:'listestudiante',component:ListestudianteComponent},
    //ruta profesor
    {path:'profesor',component:ProfesorComponent},
    {path:'addprofesor',component:AddprofesorComponent},
    {path:'editprofesor',component:EditprofesorComponent},
    {path:'listprofesor',component:ListprofesorComponent},
    
    //ruta curso
    {path:'curso',component:CursoComponent},
    {path:'addcurso',component:AddcursoComponent},
    {path:'editcurso',component:EditcursoComponent},
    {path:'listcurso',component:ListcursoComponent},
    //ruta asignatura
    {path:'asignatura',component:AsignaturaComponent},
    {path:'addasignatura',component:AddasignaturaComponent},
    {path:'editasignatura',component:EditasignaturaComponent},
    {path:'listasignatura',component:ListasignaturaComponent}]
  },
  //cuando la ruta no es encontrada
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
