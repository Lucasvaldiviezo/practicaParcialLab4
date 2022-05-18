import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  @Input()  listadoPeliculas:Pelicula[];
  @Output() peliculaSeleccionada:EventEmitter<any>= new EventEmitter<any>();
 

  constructor(public fireStore:FirestoreService){
    this.listadoPeliculas = [];
  }
  ngOnInit(): void {
  }
  mostrarDetalles(parametroPelicula:any)
  {
  	console.log("tabla");
    this.peliculaSeleccionada.emit(parametroPelicula);
  }

  
}
