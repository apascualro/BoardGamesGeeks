import { Component } from '@angular/core';
import { JuegoService}  from './services/juego.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JuegoService],
})
export class AppComponent {
  title = 'board-games-app';
  id: any;
  
  constructor(private juegoSvc: JuegoService){}

  ngOnInit(){
    this.juegoSvc.getAll().subscribe((res) => {
      console.log('Res', res);
      })

    this.juegoSvc.get(this.id).subscribe((res) => {
      console.log('Res', res);
      })
    }

  }

