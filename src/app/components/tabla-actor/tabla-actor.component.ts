import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';
@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Output() actorSeleccionado:EventEmitter<any>= new EventEmitter<any>(); 
  listaActores:Actor[];
  listaDeFireStore:any;
  constructor( public fireStore:FirestoreService) {
    this.listaActores = []; 
    this.fireStore.getCollection("Actores","actorId").subscribe((resp:any)=>{
      this.listaDeFireStore = resp;
      this.cargarListaActores(this.listaDeFireStore);
    });
  }

  ngOnInit(): void {
  }

  cargarListaActores(listaACargar:any){
    let auxListaActores:Actor[] = [];
    for(let i=0; i < listaACargar.length;i++)
    {
      let auxPais = new Paises(listaACargar[i].paisNombre,listaACargar[i].paisContinente,listaACargar[i].paisBandera);
      let auxActor = new Actor(listaACargar[i].actorId,listaACargar[i].nombre,listaACargar[i].apellido,auxPais,listaACargar[i].edad);
      auxListaActores.push(auxActor);
    }
    this.listaActores = auxListaActores;
  }

  enviarActor(actor:Actor)
  {
    this.actorSeleccionado.emit(actor);
  }
}
