import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorPeliculaComponent } from './actor-pelicula.component';
import { ActorPeliculaRoutingModule } from './actor-pelicula-routing.module';
import { PeliculaListadoComponent } from 'src/app/components/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from 'src/app/components/actor-listado/actor-listado.component';
import { DetalleActorComponent } from 'src/app/components/detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';

@NgModule({
  declarations: [
    ActorListadoComponent,
    ActorPeliculaComponent,
    PeliculaListadoComponent,
    DetalleActorComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    ActorPeliculaRoutingModule,
  ]
})
export class ActorPeliculaModule { }
