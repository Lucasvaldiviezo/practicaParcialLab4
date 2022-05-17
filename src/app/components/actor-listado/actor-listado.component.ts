import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Output() actorSeleccionado:EventEmitter<any>= new EventEmitter<any>(); 
  listaId:string[];
  listaActores:Actor[];
  listaDeFireStore:any;
  constructor(public fireStore:FirestoreService) {
    this.listaActores = [];
    this.listaId = []
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
      let auxActor = new Actor(+listaACargar[i].actorId,listaACargar[i].nombre,listaACargar[i].apellido,auxPais,listaACargar[i].edad);
      auxListaActores.push(auxActor);
    }
    this.listaActores = auxListaActores;
  }

  seleccionarActor(actorTabla:Actor){
    this.actorSeleccionado.emit(actorTabla);
  } 
}
