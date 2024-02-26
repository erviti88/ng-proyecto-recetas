import { Dificultad } from "./dificultad";

export class Receta {
    nombre: string;
    calorias: number;
    imagen: string;
    dificultad: Dificultad;

    constructor(nombre: string = "", calorias: number = 0, imagen: string = "", dificultad: Dificultad = new Dificultad()) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.imagen = imagen;
        this.dificultad = dificultad;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    
    public getCalorias(): number {
        return this.calorias;
    }
    
    public setCalorias(calorias: number): void {
        this.calorias = calorias;
    }

    public getImagen(): string {
        return this.imagen;
    }
    
    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }
    
    public getDificultad(): Dificultad {
        return this.dificultad;
    }
    
    public setDificultad(dificultad: Dificultad): void {
        this.dificultad = dificultad;
    }
    
    public toString(): string {
        return `Receta [nombre=${this.nombre}, calorias=${this.calorias}, imagen=${this.imagen}, dificultad=${this.dificultad}]`;
    }
}