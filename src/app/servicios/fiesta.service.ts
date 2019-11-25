import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Asistente } from '../interfaces/asistente';

@Injectable({
  providedIn: 'root'
})
export class FiestaService {

  constructor(private firestore: AngularFirestore) {
   }

   public addAsistente(asistente: Asistente) {
    return this.firestore.collection('asistentes').add(asistente);
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
