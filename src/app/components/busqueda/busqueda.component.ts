import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { Paises } from 'src/app/entidades/paises/paises';
import { Actor } from 'src/app/entidades/actor/actor';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listaPeliculas: Pelicula[];
  listaActores:Actor[];
  peliculasFireStore:any;
  actoresFireStore:any;
  fecha = new Date("1997-02-05");
  auxPais = new Paises("","","");
  actorParaPelicula = new Actor(0,"","",this.auxPais,0,"");
  peliculaParaMostrar:Pelicula = new Pelicula(0,"","",this.fecha,0,"",this.actorParaPelicula);
  fecha1 = new Date("2022-04-17");
  fecha2 = new Date("2020-01-30");
  fecha3 = new Date("2022-03-31");
  fecha4 = new Date("2022-02-04");
  constructor(public fireStore:FirestoreService){
    this.listaPeliculas = [
    ];
    this.listaActores = [];
    this.fireStore.getCollection("Actores","actorId").subscribe((resp:any)=>{
      this.actoresFireStore = resp;
      this.cargarListaActores(this.actoresFireStore)
      this.fireStore.getCollection("Peliculas","peliculaId").subscribe((resp:any)=>{
        this.peliculasFireStore = resp; 
        this.cargarListaPeliculas();
      });
    });
    
  }
  ngOnInit(): void {
  }

  tomarPeliculaParaDetalles(NuevaPelicula: Pelicula)
  {
    this.peliculaParaMostrar=NuevaPelicula;   
  }

  cargarListaActores(listaACargar:any){
    let auxListaActores:Actor[] = [];
    for(let i=0; i < listaACargar.length;i++)
    {
      let auxPais = new Paises(listaACargar[i].paisNombre,listaACargar[i].paisContinente,listaACargar[i].paisBandera);
      let auxActor = new Actor(+listaACargar[i].actorId,listaACargar[i].nombre,listaACargar[i].apellido,auxPais,listaACargar[i].edad,listaACargar[i].urlImagen);
      auxListaActores.push(auxActor);
    }
    this.listaActores = auxListaActores;
  }

  cargarListaPeliculas(){
    let auxListaPeliculas:Pelicula[] = [];
    let auxActor:Actor = new Actor(0,"","",this.auxPais,0,"");
    let tamañoLista = this.peliculasFireStore.length;
    for(let i=0; i < tamañoLista;i++)
    {
      auxActor = this.buscarActor(this.peliculasFireStore[i].actor,this.listaActores);
      let auxPelicula = new Pelicula(+this.peliculasFireStore[i].peliculaId,
        this.peliculasFireStore[i].nombre,
        this.peliculasFireStore[i].tipo,
        this.peliculasFireStore[i].fechaEstreno,
        +this.peliculasFireStore[i].cantidadPublico,
        this.peliculasFireStore[i].urlImagen,
        auxActor);
        auxListaPeliculas.push(auxPelicula);
    }
    this.listaPeliculas = auxListaPeliculas;
    console.log(this.listaPeliculas.length);
  }

  buscarActor(actorBuscado:string,listaActores:Actor[]):Actor{
    let nombreApeActor:string;
    let auxActor:Actor = new Actor(0,"","",this.auxPais,0,"");
    for(let i=0;i<this.listaActores.length;i++)
    {
      nombreApeActor = listaActores[i].nombre + " " + listaActores[i].apellido;
      if(actorBuscado == nombreApeActor)
      {
        auxActor = this.listaActores[i];
        console.log("SE ENCONTRO ACTOR");
        break;
      }
    }
    return auxActor;
  }

}
