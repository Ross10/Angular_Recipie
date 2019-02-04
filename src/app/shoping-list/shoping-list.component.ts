import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingredient.model';
import { ShopingListService } from './shopingList.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingrediants : Ingrediant [];
  constructor(private slService : ShopingListService) { }

  ngOnInit() {
    this.ingrediants = this.slService.getIngrediants();
    this.slService.ingreidnantChange.subscribe(
      (ingredient : Ingrediant []) => {
        this.ingrediants = ingredient
      }
    );
  }

  onIngridantAdded(ingredient: Ingrediant){
   

  }

}
