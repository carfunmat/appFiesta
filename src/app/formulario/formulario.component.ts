import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 entradas = [
    {nombre: 'nombreEntrada', importe: '50'}
  ];
  constructor() { }
  private selectedLink = 'Credito';
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
    const tabla = document.getElementById('tabla') as HTMLTableElement;
    const fila = tabla.insertRow(this.entradas.length + 1) as HTMLTableRowElement;
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);
    celda1.innerHTML = 'nombreFiesta';
    celda2.innerHTML = 'importeFiesta';
    this.entradas.push({nombre: celda1.innerText, importe: celda2.innerText});
  }
deleteEntrada() {
  const tabla = document.getElementById('tabla') as HTMLTableElement;
  if (this.entradas.length > 1) {
    tabla.deleteRow(this.entradas.length);
  } else {
    alert('No se puede borrar la entrada');
  }
}


}
