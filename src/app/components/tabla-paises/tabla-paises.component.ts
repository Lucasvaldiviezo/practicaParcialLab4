import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/servicioPais/paises.service';
import { Paises } from 'src/app/entidades/paises/paises';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() paisSeleccionado:EventEmitter<any>= new EventEmitter<any>();  
  listadoPaises:Paises[];
  maximoPaises:number = 50;
  cargado:boolean=false;
  auxNombre:string = '';
  pais:Paises;
  
  constructor(public paisesServicio:PaisesService){
    this.listadoPaises =[];
    this.paisesServicio.getAllCountries().subscribe((resp:any)=>{
      this.cargarListaPaises(resp);
    });
    this.pais = new Paises("","","");
  }

  ngOnInit(): void {
  }

  cargarListaPaises(resp:any)
  {
    while(this.cargado == false)
      {
        if(resp!=undefined)
        {
          for(let i=0;i<=this.maximoPaises;i++)
          {
            this.pais = new Paises(resp[i].name.common,resp[i].region,resp[i].flags.png);
            this.listadoPaises[i] = this.pais;
          }
          this.cargado=true;
        }
      }
  }

  enviarPais(pais:Paises)
  {
    this.paisSeleccionado.emit(pais);
  }

}
