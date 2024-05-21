import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Receta } from '../model/receta';
import { Dificultad } from '../model/dificultad';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listaDificultades: Dificultad[] = [];
  db_url: string = 'https://db-json-tau.vercel.app';
  
  constructor(private http: HttpClient) { }

  public cargarDificultades(): Dificultad[] {
    return this.listaDificultades = [
      new Dificultad("Fácil"),
      new Dificultad("Intermedio"),
      new Dificultad("Difícil")
    ];
  }

  public obtenerRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(`${this.db_url}/recetas`).pipe(
      catchError(error => {
        console.error('Error al obtener las recetas', error);
        throw (error);
      })
    );
  }

  public agregarReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(`${this.db_url}/recetas`, receta).pipe(
      catchError(error => {
        console.error('Error al agregar la receta', error);
        throw (error);
      })
    );
  }

  public obtenerReceta(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.db_url}/recetas/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener la receta', error);
        throw (error);
      })
    );
  }

  public modificarReceta(id: number, receta: Receta): Observable<Receta> {
    return this.http.put<Receta>(`${this.db_url}/recetas/${id}`, receta).pipe(
      catchError(error => {
        console.error('Error al modificar la receta', error);
        throw (error);
      })
    );
  }

  public borrarReceta(id: number): Observable<Receta> {
    return this.http.delete<Receta>(`${this.db_url}/recetas/${id}`).pipe(
      catchError(error => {
        console.error('Error al borrar la receta', error);
        throw (error);
      })
    );
  }
}
