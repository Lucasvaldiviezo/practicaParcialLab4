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
  actualizarColeccionCompletaActores(coleccion:any,actor:any)
  {
    let idDocument:string =(actor.id).toString();
    this.firestore.collection(coleccion).doc(idDocument).set({
      nombre: actor.nombre,
      apellido: actor.apellido,
      paisNombre: actor.pais.nombre,
      paisBandera: actor.pais.bandera,
      paisContinente:actor.pais.continente,
      edad: actor.edad,
      urlImagen: actor.urlImagen
    });
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
}
