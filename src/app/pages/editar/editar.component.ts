import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Dificultad } from '../../model/dificultad';
import { Receta } from '../../model/receta';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {

  receta: Receta = new Receta();
  listaDificultades: Dificultad[] = [];
  id: number = 0;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.mostrarDificultades();
    this.obtenerRecetaId();
    this.mostrarReceta();
  }

  onSubmit(): void {
    this.dataService.modificarReceta(this.id, this.receta).subscribe((data: Receta) => {
      console.log(data)
      this.router.navigate(["/insertar"]);
    });
  }

  mostrarDificultades(): void {
    this.listaDificultades = this.dataService.cargarDificultades()
  }

  obtenerRecetaId (): void {
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id = Number(params.get("id"));
      console.log(this.id);
    });
  }

  mostrarReceta(): void {
    this.dataService.obtenerReceta(this.id).subscribe({
      next: (data: Receta) => {
        this.receta = data;
        console.log(this.receta);
      },
      error: (error) => {
        console.error('Error al mostrar las receta:', error);
      },
      complete: () => {
        console.log('Receta cargada correctamente');
      }
    });
  }
}
