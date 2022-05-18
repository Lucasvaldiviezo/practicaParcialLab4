import { Component, OnInit, Input } from '@angular/core';
import { Paises } from 'src/app/entidades/paises/paises';
import { Actor } from 'src/app/entidades/actor/actor';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() actorRecibido:Actor;
  auxPais:Paises;
  mostrarInfo:boolean
  constructor() { 
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
