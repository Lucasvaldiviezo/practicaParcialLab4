import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';

const routes: Routes = [
  {path: '', redirectTo: 'bienvenido', pathMatch:'full'},
  {path:'bienvenido', component:BienvenidoComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path:'peliculas/alta', component:PeliculaAltaComponent},
  //{path:'peliculas/listado', component:PeliculaListadoComponent},
  {path:'actor/alta', component:ActorAltaComponent},
  //{path:'actor/listado', component:ActorListadoComponent},
  {path:'actor/actorpelicula', loadChildren: () => import('./modules/actor-pelicula/actor-pelicula.module').then(m=>m.ActorPeliculaModule)},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
