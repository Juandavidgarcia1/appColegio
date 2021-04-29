import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CursoComponent } from './curso/curso.component';
import { ColegioComponent } from './colegio/colegio.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddcursoComponent } from './curso/addcurso/addcurso.component';
import { EditcursoComponent } from './curso/editcurso/editcurso.component';
import { ListcursoComponent } from './curso/listcurso/listcurso.component';
import { AddcolegioComponent } from './colegio/addcolegio/addcolegio.component';
import { EditcolegioComponent } from './colegio/editcolegio/editcolegio.component';
import { ListcolegioComponent } from './colegio/listcolegio/listcolegio.component';
import { AddasignaturaComponent } from './asignatura/addasignatura/addasignatura.component';
import { EditasignaturaComponent } from './asignatura/editasignatura/editasignatura.component';
import { ListasignaturaComponent } from './asignatura/listasignatura/listasignatura.component';
import { AddestudianteComponent } from './estudiante/addestudiante/addestudiante.component';
import { EditestudianteComponent } from './estudiante/editestudiante/editestudiante.component';
import { ListestudianteComponent } from './estudiante/listestudiante/listestudiante.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ProfesorComponent } from './profesor/profesor.component';
import { ListprofesorComponent } from './profesor/listprofesor/listprofesor.component';
import { AddprofesorComponent } from './profesor/addprofesor/addprofesor.component';
import { EditprofesorComponent } from './profesor/editprofesor/editprofesor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudianteComponent,
    CursoComponent,
    ColegioComponent,
    AsignaturaComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    LayoutComponent,
    AddcursoComponent,
    EditcursoComponent,
    ListcursoComponent,
    AddcolegioComponent,
    EditcolegioComponent,
    ListcolegioComponent,
    AddasignaturaComponent,
    EditasignaturaComponent,
    ListasignaturaComponent,
    AddestudianteComponent,
    EditestudianteComponent,
    ListestudianteComponent,
    ProfesorComponent,
    ListprofesorComponent,
    AddprofesorComponent,
    EditprofesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [//ServiceService
  ], //estudiante
  bootstrap: [AppComponent]
})
export class AppModule { }
