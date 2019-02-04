import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor() { }

  ngOnInit() {
  }

}
