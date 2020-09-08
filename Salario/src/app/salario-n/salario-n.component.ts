import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-salario-n',
  templateUrl: './salario-n.component.html',
  styleUrls: ['./salario-n.component.css']
})
export class SalarioNComponent implements OnInit {

  sueldos = [];
  empleado:number;
  usuario:any;
  sueldo:number;
  ISSS:number;
  Renta:number;
  AFP:number;
  sueldoTotal:number;
  sueldoDescuento:number;
  constructor() { }

  ngOnInit(): void {
    this.sueldo = 0;
    this.ISSS = 0;
    this.Renta = 0;
    this.AFP = 0;
    this.sueldoTotal = 0;
    this.sueldoDescuento = 0;
    this.empleado = 0;
  }

  ingresar(){
    this.empleado++;
    this.ISSS = this.sueldo * 0.073;
    this.Renta = this.sueldo * 0.11;
    this.AFP = this.sueldo * 0.051;
    this.sueldoDescuento = this.ISSS + this.Renta + this.AFP;
    this.sueldoTotal = this.sueldo - this.sueldoDescuento;
    this.usuario{
      "empleado":this.empleado,
      "sueldo":this.sueldo,
      "ISSS":this.ISSS,
      "Renta":this.Renta,
      "AFP":this.AFP,
      "Descuentos":this.sueldoDescuento,
      "SueldoTotal":this.sueldoTotal
    };
    this.sueldos.push(this.usuario);
  }

}
