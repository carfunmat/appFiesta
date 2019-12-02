import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor() {
  }

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

    return (this.selectedLink === name);
  }

  addEntrada() {
    const tabla = document.getElementById('tabla') as HTMLTableElement;
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.classList.add('btn', 'btn-danger');
    boton.innerHTML = 'Eliminar';
    const fila = tabla.insertRow(2) as HTMLTableRowElement;
    fila.id = 'fila';
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);
    const celda3 = fila.insertCell(2);
    celda1.innerHTML = 'nombreFiesta';
    celda2.innerHTML = 'importeFiesta';
    celda3.insertAdjacentElement('beforeend', boton);
    boton.addEventListener('click', this.deleteRow);
  }
/*
  upTo(el, tagName) {
    tagName = tagName.toLowerCase();
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() === tagName) {
        return el;
      }
    }
    return null;
  }

 deleteRow(el) {
    const row = this.upTo(el, 'tr');
    // tslint:disable-next-line:max-line-length
    if (row) {
      row.parentNode.removeChild(row);
    }
  }*/
  deleteRow() {
    const tabla = document.getElementById('tabla') as HTMLTableElement;
    if (tabla.children.length > 3) {
      const fila = document.getElementById('fila');
      fila.remove();
    } else {
      alert('No se pueden borrar mas entradas (minimo una).');
    }
  }
}
