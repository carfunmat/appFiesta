import { Injectable } from '@angular/core';
import { Asistente } from '../interfaces/asistente';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  constructor(private firestore: AngularFirestore) { }

  public addAsistente(asistente: Asistente) {
    this.firestore.collection('asistentes').doc(asistente.dni).set(asistente);
    
    return this.firestore.doc('asistentes/'+asistente.dni).ref;
  }

  public getAsistente(documentId: string) {
    return this.firestore.collection('asistentes').doc(documentId).snapshotChanges();
  }

  public getAsistentes() {
    return this.firestore.collection('asistentes').snapshotChanges();
  }

  public updateAsistentes(documentId: string, data: any) {
    return this.firestore.collection('asistentes').doc(documentId).set(data);
  }

}
