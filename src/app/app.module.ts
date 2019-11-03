import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContatoComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
