export class Dificultad {
    dificultad: string;

    constructor(dificultad: string = "") {
        this.dificultad = dificultad;
    }
    
    public getDificultad(): string {
        return this.dificultad;
    }
    
    public setDificultad(dificultad: string): void {
        this.dificultad = dificultad;
    }
    
    public toString(): string {
        return `Dificultad [dificultad=${this.dificultad}]`;
    }
}