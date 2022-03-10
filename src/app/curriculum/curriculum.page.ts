import { Component, OnInit } from '@angular/core';
import { curriculum } from '../colecciones';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  datos = curriculum;

  constructor() { }

  ngOnInit() {
  }

}
