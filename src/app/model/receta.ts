import { Dificultad } from "./dificultad";

export class Receta {
    id: number;
    nombre: string;
    calorias: number;
    imagen: string;
    dificultad: Dificultad;

    constructor(id: number = 0, nombre: string = "", calorias: number = 0, imagen: string = "", dificultad: Dificultad = new Dificultad("")) {
        this.id = id;
        this.nombre = nombre;
        this.calorias = calorias;
        this.imagen = imagen;
        this.dificultad = dificultad;
    }
}
