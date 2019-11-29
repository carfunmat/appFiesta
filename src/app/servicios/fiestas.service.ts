import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Asistente } from '../interfaces/asistente';
import { Fiesta } from '../interfaces/fiesta';
import { FirebaseDatabase } from 'angularfire2';
import { AngularFireObject, AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs';
import { Dj } from '../interfaces/dj';

@Injectable({
  providedIn: 'root'
})
export class FiestaService {

  fiesta: Fiesta;
  constructor(private firestore: AngularFirestore) {

  }

  public addFiesta(fiesta: Fiesta) {
    return this.firestore.collection('fiestas').add(fiesta);
  }

  public getFiesta(documentId: string) {
    return this.firestore.collection('fiestas').doc(documentId).snapshotChanges().pipe(map(res => res.payload.val()));

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
