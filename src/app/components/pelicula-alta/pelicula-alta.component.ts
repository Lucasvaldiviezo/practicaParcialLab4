import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/entidades/actor/actor';
import { Paises } from 'src/app/entidades/paises/paises';
import { Pelicula } from 'src/app/entidades/pelicula';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';
import { StorageService } from 'src/app/servicios/storageService/storage.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  public formRegistro: FormGroup;
  listaPeliculas:Pelicula[];
  listaDeFireStore:any;
  auxPais:Paises;
  actorParaPelicula:Actor;
  actorParaMostrar:string = '';
  listaActores:Actor[];
  imagen:any;
  archivoSubido:any;
  mostrarImagen:boolean = false;
  subiendoImagen:boolean = false;
 
  url:string ="";
  constructor(public fb: FormBuilder, public storageService:StorageService, public fireStoreService:FirestoreService) {
    this.formRegistro = this.fb.group({
      'nombre': ['', [Validators.required]],
      'tipo': ['', Validators.required],
      'fechaEstreno': ['', [Validators.required]],
      'cantidadPublico': ['', [Validators.required]],
      'actor': ['', [Validators.required]],
    });
    this.auxPais = new Paises("","","");
    this.actorParaPelicula = new Actor(0,"","",this.auxPais,0,"");
    this.listaActores = [];
    this.listaPeliculas = [];
        
  }

  ngOnInit(): void {
    this.fireStoreService.getCollection("Peliculas","peliculaId").subscribe((resp:any)=>{
      this.listaDeFireStore = resp; 
      this.cargarListaPeliculas();
    });    
  }

  cargarListaPeliculas(){
    let auxListaPeliculas:Pelicula[] = [];
    let auxActor:Actor = new Actor(0,"","",this.auxPais,0,"");
    let tamañoLista = this.listaDeFireStore.length;
    for(let i=0; i < tamañoLista;i++)
    {
      auxActor = this.buscarActor(this.listaDeFireStore[i].actor,this.listaActores);
      let auxPelicula = new Pelicula(+this.listaDeFireStore[i].peliculaId,
        this.listaDeFireStore[i].nombre,
        this.listaDeFireStore[i].tipo,
        this.listaDeFireStore[i].fechaEstreno,
        +this.listaDeFireStore[i].cantidadPublico,
        this.listaDeFireStore[i].urlImagen,
        auxActor);
        auxListaPeliculas.push(auxPelicula);
    }
    this.listaPeliculas = auxListaPeliculas;
    console.log(this.listaPeliculas.length);
  }
  recibirActores(listaActoresRecibida:any)
  {
      this.listaActores = listaActoresRecibida;
  }

  tomarActorParaPelicula(nuevoActor:Actor)
  {
    this.actorParaPelicula = nuevoActor;
    this.actorParaMostrar = this.actorParaPelicula.nombre + " " + this.actorParaPelicula.apellido
    this.formRegistro.controls['actor'].setValue(this.actorParaPelicula);
  }

  cargarPelicula()
  {
    let id = this.listaPeliculas.length+1;
    this.subiendoImagen = true;
    let nombreImagen = id+"+"+this.formRegistro.getRawValue().nombre;
    this.storageService.subirImagenStorage(nombreImagen,this.archivoSubido[0],"peliculas/").then(urlImagen =>{
      if(urlImagen !=null)
      {
          let pelicula = new Pelicula(id,
          this.formRegistro.getRawValue().nombre,
          this.formRegistro.getRawValue().tipo,
          this.formRegistro.getRawValue().fechaEstreno,
          +this.formRegistro.getRawValue().cantidadPublico,
          urlImagen,
          this.actorParaPelicula);
          this.listaPeliculas.push(pelicula);
          this.fireStoreService.actualizarColeccionCompletaPeliculas("Peliculas",pelicula);
          if(this.formRegistro.valid){
            this.formRegistro.controls['nombre'].setValue("");
            this.formRegistro.controls['tipo'].setValue("");
            this.formRegistro.controls['fechaEstreno'].setValue("");
            this.formRegistro.controls['cantidadPublico'].setValue("");
            this.formRegistro.controls['actor'].setValue("");
          }
          this.archivoSubido='';
          this.mostrarImagen = false;
          this.subiendoImagen = false;
      } 
  });    
}

  obtenerImagen(imagen:any)
  {
    this.archivoSubido = imagen.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(this.archivoSubido[0]);
    reader.onloadend = () => {
      this.imagen = reader.result;
      this.mostrarImagen = true;
    }
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
