import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Asistente } from '../interfaces/asistente';

@Injectable({
  providedIn: 'root'
})
export class FiestaService {

  constructor(private firestore: AngularFirestore) {
   }

   public anyadirAsistente(asistente: Asistente) {
    return this.firestore.collection('asistentes').add(asistente);
  }


}
