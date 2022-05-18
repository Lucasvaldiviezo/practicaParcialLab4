import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() actorRecibido:Actor;
  auxPais:Paises;
  mostrarInfo:boolean;
  constructor( ) {
    this.auxPais = new Paises("","","");
    this.actorRecibido = new Actor(0,"","",this.auxPais,0,"");
    this.mostrarInfo = false;
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.mostrarInfo = true;
  }

}
