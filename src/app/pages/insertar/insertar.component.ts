import { Component, OnInit } from '@angular/core';
import { Receta } from '../../model/receta';
import { Dificultad } from '../../model/dificultad';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.scss'
})
export class InsertarComponent implements OnInit {

  listaRecetas: Receta[] = [];
  listaDificultades: Dificultad[] = [];
  nuevaReceta: Receta = new Receta();
  listaVacia: string = "No se encontraron recetas que coincidan con tus filtros. Intenta modificar los filtros o crear una nueva receta.";

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.nuevaReceta = new Receta(0, "", 0, "https://placehold.co/500x300", new Dificultad("Fácil"));
    this.mostrarRecetas();
    this.mostrarDificultades();
  }
  
  onSubmit(): void {
    this.nuevaReceta.id = this.generarIdUnico();
    this.dataService.agregarReceta(this.nuevaReceta).subscribe({
      next: (data: Receta) => {
        console.log(data.id);
        this.router.navigate(["/mostrar"])
      },
      error: (error) => {
        console.error('Error al agregar la receta:', error);
      },
      complete: () => {
        console.log('Receta agregada correctamente');
      }
    });

    this.nuevaReceta = new Receta();
  }

  mostrarRecetas(): void {
    this.dataService.obtenerRecetas().subscribe({
      next: (data: Receta[]) => {
        this.listaRecetas = data;
        console.log(this.listaRecetas);
      },
      error: (error) => {
        console.error('Error al mostrar las recetas:', error);
      },
      complete: () => {
        console.log('Recetas cargadas correctamente');
      }
    });
  }

  mostrarDificultades(): void {
    this.listaDificultades = this.dataService.cargarDificultades();
  }

  borrarReceta(id: number) {
    this.dataService.borrarReceta(id).subscribe({
      next: () => {
        this.mostrarRecetas();
      },
      error: (error) => {
        console.error('Error al borrar la receta:', error);
      },
      complete: () => {
        console.log('Receta borrada correctamente');
      }
    });
  }

  private generarIdUnico(): number {
    return new Date().getTime();
  }
}
