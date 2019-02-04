import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Recipie } from '../../recipie.model';
import {  } from 'events';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
  @Input() recipie : Recipie;


  constructor(private recipieService : RecipieService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipieService.recipieSelected.emit(this.recipie);
  }

}
