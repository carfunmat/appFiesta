import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
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

  public addAsistenteFiesta(asistente: Asistente, documentId: string) {
    this.firestore.collection('fiestas').doc(documentId).collection('publico').doc(asistente.dni).set(asistente);

  }

  public getAsistentes(documentId: string) {
    let asistentes: any[] = [];
    this.firestore.collection('fiestas').doc(documentId).collection('publico').snapshotChanges().subscribe((publicoSnapshot) => {
      publicoSnapshot.forEach((publicoData: any) => asistentes.push(publicoData.payload.doc.data()
      )
      )
    });
    return asistentes;
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
