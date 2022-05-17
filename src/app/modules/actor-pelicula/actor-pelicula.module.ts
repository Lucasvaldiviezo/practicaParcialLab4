import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorPeliculaComponent } from './actor-pelicula.component';
import { ActorPeliculaRoutingModule } from './actor-pelicula-routing.module';
import { PeliculaListadoComponent } from 'src/app/components/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from 'src/app/components/actor-listado/actor-listado.component';

@NgModule({
  declarations: [
    ActorListadoComponent,
    ActorPeliculaComponent,
    PeliculaListadoComponent,
  ],
  imports: [
    CommonModule,
    ActorPeliculaRoutingModule,
  ]
})
export class ActorPeliculaModule { }
