import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import { JuegoListaComponent } from './components/juego/juego-lista/juego-lista.component';
import { JuegoDetallesComponent } from './components/juego/juego-detalles/juego-detalles.component';
import { AddJuegoComponent } from './components/juego/addJuego/add-juego.component';


const routes: Routes = [
	{ path: '', redirectTo: 'juegos', pathMatch: 'full' },
	{ path: 'juegos', component: JuegoListaComponent },
	{ path: 'juegos/:id', component: JuegoDetallesComponent },
	{ path: 'add-juego', component: AddJuegoComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
