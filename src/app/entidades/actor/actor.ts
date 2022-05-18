import { Paises } from "../paises/paises";

export class Actor {
    id:number;
    nombre:string;
    apellido:string;
    pais:Paises;
    edad:number;
    urlImagen:string;
    constructor(id:number,nombre:string,apellido:string,pais:Paises,edad:number,urlImagen:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido,
        this.pais = pais;
        this.edad = edad;
        this.urlImagen = urlImagen;
    }
}
