import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {
  registros$!: Observable<Registro[]>;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener los registros desde Firestore
    this.registros$ = this.firebaseService.getRegistros();
  }

  // Navegar a la página de registro (Home)
  goToHome() {
    this.router.navigate(['/home']);
  }
}
