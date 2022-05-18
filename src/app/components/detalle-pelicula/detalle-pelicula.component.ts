import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() unaPelicula:Pelicula;
  fecha = new Date("1997-02-05");
  auxPais = new Paises("","","");
  actorParaPelicula = new Actor(0,"","",this.auxPais,0,"");
  constructor() { 
    this.unaPelicula = new Pelicula(5,"Terminator","Sci-Fi",this.fecha,200,"",this.actorParaPelicula);
  }

  ngOnInit(): void {
  }

}
