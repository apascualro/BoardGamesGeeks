import { Component, OnInit } from '@angular/core';
import { JuegoService } from 'src/app/services/juego.service';

//Esto es la clase que se necesita para trabajar con formularios
import {NgForm} from '@angular/forms';

@Component({
	selector: 'app-add-juego',
	templateUrl: './add-juego.component.html',
	styleUrls: ['./add-juego.component.css']
})
export class AddJuegoComponent implements OnInit {

	juego = {
		nombre: '',
		subtitulo: '',
		es_activo: false
	};
	submitted = false;

	constructor(private juegoService: JuegoService) { }

	ngOnInit(): void {
	}

	saveJuego(): void {
    const data = {
      nombre: this.juego.nombre,
      subtitulo: this.juego.subtitulo
    };

    this.juegoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error + "no se ha podido guardar");
        });
  }

  newJuego(): void {
    this.submitted = false;
    this.juego = {
      nombre: '',
      subtitulo: '',
      es_activo: false
    };
  }

}
