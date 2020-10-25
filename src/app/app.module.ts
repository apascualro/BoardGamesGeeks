import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddJuegoComponent } from './components/juego/addJuego/add-juego.component';
import { JuegoDetallesComponent } from './components/juego/juego-detalles/juego-detalles.component';
import { JuegoListaComponent } from './components/juego/juego-lista/juego-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJuegoComponent,
    JuegoDetallesComponent,
    JuegoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
