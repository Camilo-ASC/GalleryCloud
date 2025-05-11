import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Registro } from '../models/registro.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firestore: Firestore;
  private registrosRef: any;

  constructor() {
    const app = initializeApp(environment.firebaseConfig); // ✅ Inicializamos Firebase
    this.firestore = getFirestore(app);                    // ✅ Obtenemos instancia de Firestore
    this.registrosRef = collection(this.firestore, 'registros'); // ✅ Ahora sí se puede usar
  }

  async addRegistro(registro: Registro): Promise<void> {
    await addDoc(this.registrosRef, registro);
  }

  getRegistros(): Observable<Registro[]> {
    return collectionData(this.registrosRef, { idField: 'id' }) as Observable<Registro[]>;
  }
}
