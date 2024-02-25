import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { ErrorComponent } from './pages/error/error.component';
import { InsertarComponent } from './pages/insertar/insertar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mostrar', component: MostrarComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
