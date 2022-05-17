import { Actor } from "./actor/actor";

export class Pelicula {

    id:number;
    nombre:string;
    tipo:string;
    fechaEstreno:Date;
    cantidadPublico:number;
    urlImagen:string;
    actor:Actor;

    constructor(id:number,nombre:string,tipo:string,fechaEstreno:Date,cantidadPublico:number,urlImagen:string,actor:Actor)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.urlImagen = urlImagen;
        this.actor = actor;
    }
}
