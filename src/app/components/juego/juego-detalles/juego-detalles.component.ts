import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-juego-detalles',
	templateUrl: './juego-detalles.component.html',
	styleUrls: ['./juego-detalles.component.css']
})
export class JuegoDetallesComponent implements OnInit {

	currentJuego = null;
	message = '';

	constructor(
		private juegoService: JuegoService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		this.message = '';
		this.getJuego(this.route.snapshot.paramMap.get('id'));
	}

	getJuego(id): void {
		this.juegoService.get(id)
		.subscribe(
			data => {
				this.currentJuego = data;
				console.log(data);
			},
			error => {
				console.log(error);
			});
	}

	updateActivo(status): void {
		const data = {
			nombre: this.currentJuego.nombre,
			subtitulo: this.currentJuego.subtitulo,
			es_activo: status
		};

		this.juegoService.update(this.currentJuego.id, data)
		.subscribe(
			response => {
				this.currentJuego.es_activo = status;
				console.log(response);
			},
			error => {
				console.log(error);
			});
	}

	updateJuego(): void {
		this.juegoService.update(this.currentJuego.id, this.currentJuego)
		.subscribe(
			response => {
				console.log(response);
				this.message = 'The juego was updated successfully!';
			},
			error => {
				console.log(error);
			});
	}

	deleteJuego(): void {
		this.juegoService.delete(this.currentJuego.id)
		.subscribe(
			response => {
				console.log(response);
				this.router.navigate(['/juegos']);
			},
			error => {
				console.log(error);
			});
	}

}
