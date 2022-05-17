import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';
import { Pelicula } from 'src/app/entidades/pelicula';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  @Input() actorRecibido:string = "";
  actorParaPelicula:string;
  listaDePeliculas:any;
  listaFiltradaDePeliculas:any 
  mostrarListado:boolean = false;
  
  constructor(public fireStore:FirestoreService) {
    this.listaDePeliculas = [];
    this.actorParaPelicula = "";
    this.listaFiltradaDePeliculas = [];
  }

  ngOnInit(): void {
    this.fireStore.getCollection("Peliculas","peliculaId").subscribe((resp:any)=>{
      this.listaDePeliculas = resp; 
    });
  }

  
  ngOnChanges(){
    this.actorParaPelicula = this.actorRecibido;
    this.listaFiltradaDePeliculas = [];
    this.mostrarLista();
  }
  public mostrarLista(){
    for(let i=0; i<this.listaDePeliculas.length; i++)
    {
      if(this.actorParaPelicula == this.listaDePeliculas[i].actor)
      {
        this.listaFiltradaDePeliculas.push(this.listaDePeliculas[i]);
      }
    }
    this.mostrarListado = true;
  }

}
