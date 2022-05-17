import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './actor-pelicula.component';


const routes: Routes = [
  { path:'', component: ActorPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActorPeliculaRoutingModule { }
