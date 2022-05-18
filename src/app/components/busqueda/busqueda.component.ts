import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { Paises } from 'src/app/entidades/paises/paises';
import { Actor } from 'src/app/entidades/actor/actor';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listadoPeliculasPrincipal: Pelicula[];
  fecha = new Date("1997-02-05");
  auxPais = new Paises("","","");
  actorParaPelicula = new Actor(0,"","",this.auxPais,0,"");
  peliculaParaMostrar:Pelicula = new Pelicula(5,"Terminator","Sci-Fi",this.fecha,200,"",this.actorParaPelicula);
  fecha1 = new Date("2022-04-17");
  fecha2 = new Date("2020-01-30");
  fecha3 = new Date("2022-03-31");
  fecha4 = new Date("2022-02-04");
  constructor(){
    this.listadoPeliculasPrincipal = [
      { id:1,nombre: "IT" ,tipo:"Terror",fechaEstreno: this.fecha1, cantidadPublico: 100, urlImagen: "", actor: this.actorParaPelicula},
      { id:2,nombre: "Encantada" ,tipo:"Romance",fechaEstreno: this.fecha2, cantidadPublico: 100, urlImagen: "", actor: this.actorParaPelicula },
      { id:3,nombre: "Ted" ,tipo:"Comedia",fechaEstreno: this.fecha3, cantidadPublico: 100, urlImagen:"", actor: this.actorParaPelicula },
      { id:4,nombre: "Turning Red" ,tipo:"Infantil",fechaEstreno: this.fecha4, cantidadPublico: 100, urlImagen:"", actor:this.actorParaPelicula },
    ];
  }
  ngOnInit(): void {
  }

  tomarPeliculaParaDetalles(NuevaPelicula: Pelicula)
  {
    this.peliculaParaMostrar=NuevaPelicula;   
  }

}
