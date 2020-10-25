import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
	selector: 'app-juego-lista',
	templateUrl: './juego-lista.component.html',
	styleUrls: ['./juego-lista.component.css']
})
export class JuegoListaComponent implements OnInit {

	juegos: any;
	currentJuego = null;
	currentIndex = -1;
	nombre = '';

	constructor(private juegoService: JuegoService) { }

	ngOnInit(): void {
		this.retrieveJuegos();
	}

	retrieveJuegos(): void {
		this.juegoService.getAll()
		.subscribe(
			data => {
				this.juegos = data;
				console.log(data);
			},
			error => {
				console.log(error + "no hay juegos que mostrar");
			});
	}

	refreshList(): void {
		this.retrieveJuegos();
		this.currentJuego = null;
		this.currentIndex = -1;
	}

	setActiveJuego(juego, index): void {
		this.currentJuego = juego;
		this.currentIndex = index;
	}

	removeAllJuegos(): void {
		this.juegoService.deleteAll()
		.subscribe(
			response => {
				console.log(response);
				this.retrieveJuegos();
			},
			error => {
				console.log(error + "no se han podido eliminar los juegos");
			});
	}

	searchNombre(): void {
		this.juegoService.findByNombre(this.nombre)
		.subscribe(
			data => {
				this.juegos = data;
				console.log(data);
			},
			error => {
				console.log(error + "No se ha podido encontrar");
			});
	}

}
