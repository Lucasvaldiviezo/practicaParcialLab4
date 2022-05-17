import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {
  actorParaDetalles:Actor;
  nombreActor:string;
  auxPais:Paises;
  constructor() { 
    this.auxPais = new Paises("","","");
    this.actorParaDetalles = new Actor(0,"","",this.auxPais,0);
    this.nombreActor = "";
  }

  ngOnInit(): void {
  }

  tomarActorParaDetalles(actorSeleccionado:Actor)
  {
    this.actorParaDetalles = actorSeleccionado;
    this.nombreActor = actorSeleccionado.nombre + " " + actorSeleccionado.apellido;
    console.log(actorSeleccionado.nombre);
  }

}
