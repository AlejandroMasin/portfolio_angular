import { Component, OnInit } from '@angular/core';

import{ CargarScriptsService } from "./cargar-scripts.service"
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  algo:any
  title = 'portfolio';

  constructor(private datosPortfolio:PortfolioService)
  {  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      console.log(data);
      this.algo = data;
    });
  }
}
