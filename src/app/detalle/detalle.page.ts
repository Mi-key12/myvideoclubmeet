import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula, peliculas } from '../colecciones';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  @Input() pelicula: Pelicula | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    // console.log(id);
    const rutas = this.activatedRoute.snapshot.paramMap;
    const peliDeRutas = Number(rutas.get('id'));

    this.pelicula = peliculas.find(pelicula => pelicula.id === peliDeRutas);
  }

}
