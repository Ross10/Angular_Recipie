import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipie[];
  
  constructor(private recipieService : RecipieService) { }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipies();
  }

}
