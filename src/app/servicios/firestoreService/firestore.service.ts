import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  getCollection(coleccion:any, nombreIdField:string){
    return this.firestore.collection(coleccion).valueChanges({ idField: nombreIdField });
  }
  actualizarColeccionCompletaActores(coleccion:any,datos:any)
  {
    for(let i = 0; i < datos.length; i++)
    {
      let idDocument:string =(i+1).toString();
      this.firestore.collection(coleccion).doc(idDocument).set({
        nombre: datos[i].nombre,
        apellido: datos[i].apellido,
        paisNombre: datos[i].pais.nombre,
        paisBandera: datos[i].pais.bandera,
        paisContinente:datos[i].pais.continente,
        edad: datos[i].edad,
      });
    } 
  }

  actualizarColeccionCompletaPeliculas(coleccion:any,pelicula:any)
  {
    
      let idDocument:string =(pelicula.id).toString();
      this.firestore.collection(coleccion).doc(idDocument).set({
        nombre: pelicula.nombre,
        tipo: pelicula.tipo,
        fechaEstreno: pelicula.fechaEstreno,
        cantidadPublico: pelicula.cantidadPublico,
        urlImagen: pelicula.urlImagen,
        actor: pelicula.actor.nombre + " " + pelicula.actor.apellido,
        idActor: pelicula.actor.id
      });
    
  }

  actualizarURL(id:string,url:string)
  {
    this.firestore.collection("Peliculas").doc(id).update({urlImagen: url});
  }
  
  /*addActor(coleccion:any,actor:any)
  {
   /* this.firestore.collection(coleccion).doc(idDocument).set({
      posicion: puntaje.posicion,
      puntaje: puntaje.puntaje,
      usuario: puntaje.usuario,
    })
  }*/
}
