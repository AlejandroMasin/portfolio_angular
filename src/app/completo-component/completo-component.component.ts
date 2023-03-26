import { Component, OnInit } from '@angular/core';
import{ CargarScriptsService } from "./../cargar-scripts.service"

import { PortfolioService } from './../portfolio.service';


@Component({
  selector: 'app-completo-component',
  templateUrl: './completo-component.component.html',
  styleUrls: ['./completo-component.component.css']
})
export class CompletoComponentComponent implements OnInit {

  principal_data: any
  trabajoList: any
  educacionList: any
  skillsList: any
  proyectosList: any

  constructor(private _cargarScripts:CargarScriptsService, private datosPortfolio:PortfolioService )
  {
    _cargarScripts.carga(["main2","test","aos", "bootstrap.bundle.min"])
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      console.log(data);
      this.principal_data=data;
      this.trabajoList=data.trabajos
      this.educacionList=data.educacion
      this.skillsList=data.skills
      this.proyectosList=data.proyectos
    });
  }
}

