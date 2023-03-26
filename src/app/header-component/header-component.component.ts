import { Component, OnInit } from '@angular/core';
import{ CargarScriptsService } from "./../cargar-scripts.service"

import { PortfolioService } from './../portfolio.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit  {

  header_data:any

  constructor(private _cargarScripts:CargarScriptsService,  private datosPortfolio:PortfolioService)
  {
    _cargarScripts.carga(["main2","test", "aos", "bootstrap.bundle.min"])
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      console.log(data);
      this.header_data=data;
    });
  }

}
