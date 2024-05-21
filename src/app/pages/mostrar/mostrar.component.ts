import { Component, OnInit } from '@angular/core';
import { Receta } from '../../model/receta';
import { DataService } from '../../services/data.service';
import { Dificultad } from '../../model/dificultad';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.scss'
})
export class MostrarComponent implements OnInit {

  listaDificultades: Dificultad[] = [];
  listaRecetas: Receta[] = [];
  listaVacia: string = "No se encontraron recetas que coincidan con tus filtros. Intenta modificar los filtros o crear una nueva receta.";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mostrarRecetas();
    this.mostrarDificultades();
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
    console.log(this.listaDificultades);
  }
}
