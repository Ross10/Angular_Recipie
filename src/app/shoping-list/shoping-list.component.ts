import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingrediants : Ingrediant [] = [
    new Ingrediant('apples',5),new Ingrediant('tomaatos',7)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngridantAdded(ingredient: Ingrediant){
    this.ingrediants.push(ingredient);

  }

}
