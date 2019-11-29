import { Injectable } from '@angular/core';
import { Fiesta } from '../interfaces/fiesta';
import { Asistente } from '../interfaces/asistente';

@Injectable({
  providedIn: 'root'
})
export class FiestaService {

fiesta: Fiesta;

  constructor() { }

  public addAsistente(asistente: Asistente) {   
    this.fiesta.publico.push(asistente);
  }

  public getAsistentes(){
    return this.fiesta.publico;
  }

  public getPublico(){
    return this.fiesta.publico.length;
  }

public getDescripcion(){
  return this.fiesta.descripcion;
}

}
