import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  private selectedLink = 'Credito';
  private entradas = [
    {nombre: 'nombreFiesta', importe: '10'},
  ];
  private indice;
  ngOnInit() {
  }

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) {
      return false;
    }

    return (this.selectedLink === name); // if current radio button is selected, return true, else return false
  }
  addEntrada() {
    let entrada;
    entrada = {
    nombre: 'nombreFiesta',
    importe: 'importeFiesta',
  };
    this.entradas.push(entrada);
  }
  removeEntrada(indice) {
  this.entradas.splice(indice, 1);
  }


}
