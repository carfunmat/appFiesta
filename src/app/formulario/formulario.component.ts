import { Component, OnInit } from '@angular/core';
import { Asistente } from '../interfaces/asistente';
import { CompraService } from '../servicios/compra.service';
import { FiestaService } from '../servicios/fiesta.service';
import { FiestasService } from '../servicios/fiestas.service';
import { Fiesta } from '../interfaces/fiesta';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AsistenteService } from '../servicios/asistente.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  variableAsistente: Asistente;
  publico = [];
  asistente: Asistente;
  fiesta: Fiesta;
  totalEntrada: number = 0;
  precio: number = 0;
  compra = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    direccion: new FormControl(),
    dni: new FormControl(),
    telefono: new FormControl()
  });


  constructor(private compraService: CompraService, private fiestasService: FiestasService, private asistentesService: AsistenteService, private fiestaSrvce: FiestaService, private route: ActivatedRoute) {
  }

  private selectedLink = 'Credito';


  ngOnInit() {
    //console.log(this.totalEntrada);
    this.getFiesta();

    //console.log(this.totalEntrada);
  }

  getFiesta() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fiestasService.getFiesta(id)
      .subscribe(fiesta => this.fiesta = fiesta.payload.data() as Fiesta);
    this.totalEntrada = this.fiesta.precio;
    this.precio = this.fiesta.precio;
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
    this.totalEntrada += +this.fiesta.precio;
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
    celda1.innerHTML = this.fiesta.nombre;
    celda2.innerHTML = this.fiesta.precio + "€";
    celda3.insertAdjacentElement('beforeend', boton);
    boton.addEventListener('click', this.deleteRow);
    this.totalEntrada += +this.fiesta.precio;
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
      this.totalEntrada = this.totalEntrada - this.fiesta.precio;
    } else {
      alert('No se pueden borrar mas entradas (minimo una).');
    }
  }

  comprarEntrada() {
    this.variableAsistente = {
      nombre: this.compra.get('nombre').value,
      apellidos: this.compra.get('apellidos').value,
      dni: this.compra.get('dni').value,
      direccion: this.compra.get('direccion').value,
      telefono: this.compra.get('telefono').value,
      email: this.compra.get('email').value
    }
    console.log(this.variableAsistente);

    //this.compraService.comprarEntrada();
    //let asistente = this.compraService.getAsistente();
    let ref = this.asistentesService.addAsistente(this.variableAsistente);
    // this.fiestaSrvce.addAsistente(asistente);
    const id = this.route.snapshot.paramMap.get('id');
    this.fiestasService.addAsistenteFiesta(this.variableAsistente,id);
    console.log("Persona añadida");
  }

  /*
   let asistentes = this.fiestasService.getAsistentes(id);
   asistentes.subscribe((publicoSnapShot) => {
     publicoSnapShot.push(this.variableAsistente);
       console.log("Persona añadida");
     })
   }*/
}