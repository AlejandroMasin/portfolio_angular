import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Inicio servicios

import{ CargarScriptsService } from "./cargar-scripts.service"
import{ PortfolioService } from "./portfolio.service"
//Fin servicios

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { CompletoComponentComponent } from './completo-component/completo-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { IrArribaComponent } from './ir-arriba/ir-arriba.component';
import { Error404Component } from './error404/error404.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CompletoComponentComponent,
    HeaderComponentComponent,
    AboutmeComponent,
    FooterComponentComponent,
    IrArribaComponent,
    Error404Component,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CargarScriptsService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
