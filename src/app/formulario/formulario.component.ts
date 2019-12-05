import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
/* entradas = [
    {nombre: 'nombreEntrada', importe: '50'}
  ];*/
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

    return (this.selectedLink === name);
  }
  addEntrada() {
    const tabla = document.getElementById('tabla') as HTMLTableElement;
    const boton = document.createElement('button');
    boton.addEventListener('click', this.deleteRow);
    // boton.addEventListener('click', this.deleteRow(event.target));
    boton.innerHTML = 'Eliminar';
    const fila = tabla.insertRow(2) as HTMLTableRowElement;
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);
    const celda3 = fila.insertCell(2);
    celda1.innerHTML = 'nombreFiesta';
    celda2.innerHTML = 'importeFiesta';
    celda3.insertAdjacentElement('beforeend', boton);
    // this.entradas.push({nombre: celda1.innerText, importe: celda2.innerText});
  }

  upTo(el, tagName) {
    tagName = tagName.toLowerCase();
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() === tagName) {
        console.log('bien');
        return el;
      }
    }
    console.log(el);
    return null;
  }

  deleteRow(el) {
    const row = this.upTo(el, 'tr')
    // tslint:disable-next-line:max-line-length
    if (row || document.getElementById('tabla').children.length === 3) { row.parentNode.removeChild(row); } else { alert('Lo siento pero no se puede borrar otra entrada(lo minimo es una)'); }
  }

  
}
