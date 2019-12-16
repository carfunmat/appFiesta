import { Injectable } from '@angular/core';
import { Asistente } from '../interfaces/asistente';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  asistente: Asistente;
  compra: FormGroup;
  private variable: FormControl;
  constructor(private formBuilder: FormBuilder) {
    this.variable = new FormControl('', [Validators.required]);
    this.compra = formBuilder.group({ variable: this.variable });
  }

  comprarEntrada() {
    this.compra = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      dni: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
    })
    let asistente = {
      nombre: this.compra.get('nombre').value,
      apellidos: this.compra.get('apellidos').value,
      dni: this.compra.get('dni').value,
      direccion: this.compra.get('direccion').value,
      telefono: this.compra.get('telefono').value,
      email: this.compra.get('email').value
    }
    console.log(asistente);

    /*
    sessionStorage.setItem("nombre", this.asistente.nombre);
    sessionStorage.setItem("apellidos", this.asistente.apellidos);
    sessionStorage.setItem("dni", this.asistente.dni);
    sessionStorage.setItem("nombre", this.asistente.nombre);
    sessionStorage.setItem("nombre", this.asistente.nombre);
    sessionStorage.setItem("nombre", this.asistente.nombre);
*/
// return asistente;
  }


  getAsistente() {
    return this.asistente;
  }

}
