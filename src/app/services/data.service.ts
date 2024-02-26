import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Receta } from '../model/receta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db_url_recetas: string = '';

  constructor(private http: HttpClient) { }

  public obtenerRecetas(): Observable<Receta[]> {
    return this.http.get<Receta[]>(this.db_url_recetas).pipe(
      catchError(error => {
        console.error('Error al obtener las recetas', error);
        throw (error);
      })
    );
  }

  public obtenerReceta(id: number): Observable<Receta> {
    return this.http.get<Receta>(`${this.db_url_recetas}/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener la receta', error);
        throw (error);
      })
    );
  }

  public agregarReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.db_url_recetas, receta).pipe(
      catchError(error => {
        console.error('Error al agregar la receta', error);
        throw (error);
      })
    );
  }

  public modificarReceta(id: number, receta: Receta): Observable<Receta> {
    return this.http.put<Receta>(`${this.db_url_recetas}/${id}`, receta).pipe(
      catchError(error => {
        console.error('Error al modificar la receta', error);
        throw (error);
      })
    );
  }

  public borrarReceta(id: number): Observable<Receta> {
    return this.http.delete<Receta>(`${this.db_url_recetas}/${id}`).pipe(
      catchError(error => {
        console.error('Error al borrar la receta', error);
        throw (error);
      })
    );
  }
}
