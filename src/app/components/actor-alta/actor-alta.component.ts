import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Paises } from 'src/app/entidades/paises/paises';
import { Actor } from 'src/app/entidades/actor/actor';
import { FirestoreService } from 'src/app/servicios/firestoreService/firestore.service';
@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})

export class ActorAltaComponent implements OnInit {
  public formRegistro: FormGroup;
  paisParaActor:Paises;
  listaDeFireStore:any[];
  listaActores:Actor[];
  constructor(public fb: FormBuilder, public fireStore:FirestoreService) {
    this.formRegistro = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18),Validators.max(99) ]],
      'pais': ['', [Validators.required]],
    });
    this.paisParaActor = new Paises("","","");
    this.listaDeFireStore = [];
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

  cargarActor()
  {
    let id = this.listaActores.length+1;
    let actor = new Actor(id,
    this.formRegistro.getRawValue().nombre,
    this.formRegistro.getRawValue().apellido,
    this.paisParaActor,
    +this.formRegistro.getRawValue().edad)
    this.listaActores.push(actor);
    this.fireStore.actualizarColeccionCompletaActores("Actores",this.listaActores);
    if(this.formRegistro.valid){
      this.formRegistro.controls['pais'].setValue("");
      this.formRegistro.controls['nombre'].setValue("");
      this.formRegistro.controls['apellido'].setValue("");
      this.formRegistro.controls['edad'].setValue("");
    }
  }

  tomarPaisParaActor(nuevoPais:Paises)
  {
    this.paisParaActor = nuevoPais;
    this.formRegistro.controls['pais'].setValue(this.paisParaActor.nombre);
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }


}
