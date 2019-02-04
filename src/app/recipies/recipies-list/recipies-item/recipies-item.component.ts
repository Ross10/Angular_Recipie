import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipie } from '../../recipie.model';
import {  } from 'events';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input() recipie : Recipie;
  @Output() recipieSelected = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipieSelected.emit()
  }

}
