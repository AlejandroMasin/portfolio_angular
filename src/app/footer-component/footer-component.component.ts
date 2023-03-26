import { Component, OnInit } from '@angular/core';
import{ CargarScriptsService } from "./../cargar-scripts.service"

import { PortfolioService } from './../portfolio.service';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit  {

  footer_data:any

  constructor(private _cargarScripts:CargarScriptsService,  private datosPortfolio:PortfolioService)
  {
    _cargarScripts.carga(["main2","test", "aos", "bootstrap.bundle.min"])
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      console.log(data);
      this.footer_data=data;
    });
  }

}