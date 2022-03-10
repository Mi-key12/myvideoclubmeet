import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { peliculas } from '../colecciones';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {
  modoLista = true;
  peliculas = peliculas;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  cambiarVista(): void {
    this.modoLista = !this.modoLista;
  }

  verPaginaDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

}
