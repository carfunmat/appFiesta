import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Asistente } from '../interfaces/asistente';
import { Fiesta } from '../interfaces/fiesta';

@Injectable({
  providedIn: 'root'
})
export class FiestasService {

  fiesta: Fiesta;
  constructor(private firestore: AngularFirestore) {

  }
// Hola 
  public addFiesta(fiesta: Fiesta) {
    return this.firestore.collection('fiestas').add(fiesta);
  }

  public getFiesta(documentId: string) {
    return this.firestore.collection('fiestas').doc(documentId).snapshotChanges();

  } 

  public getAsistentes(documentId: string) {
    let fiestaDoc = this.firestore.collection<Fiesta>('fiestas').doc(documentId);
    return fiestaDoc.collection<Asistente>('publico').valueChanges();
  }

  public getFiestas() {
    return this.firestore.collection('fiestas').snapshotChanges();
  }

  public updateFiesta(documentId: string, data: any) {
    return this.firestore.collection('fiestas').doc(documentId).set(data);
  }

  public createFiesta(fiesta: Fiesta) {
    return this.firestore.collection('fiestas').add(fiesta);
  }

}
