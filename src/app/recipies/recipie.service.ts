import { EventEmitter, Injectable } from '@angular/core';
import { Recipie } from './recipie.model';
import { Ingrediant } from '../shared/ingredient.model';
import { ShopingListService } from '../shoping-list/shopingList.service';


@Injectable()
export class RecipieService {
    recipieSelected= new EventEmitter<Recipie>();
    private recipies: Recipie[] = [
        new Recipie('Tasty Shnitzel','Shnitzel WOW','https://www.sugat.com/wp-content/uploads/2017/06/pastel-720x480.jpg',[new Ingrediant('Meat',1),new Ingrediant('French Friez',20)]),
        new Recipie('Big Fat Burger','You Better Taste it','https://www.sugat.com/wp-content/uploads/2017/06/pastel-720x480.jpg',[new Ingrediant('Buns',2),new Ingrediant('Meat',1)])
      ];

    constructor(private slService : ShopingListService){}

    getRecipies() {
        return this.recipies.slice();
    }

    addIngreidantsToShoppingList(ingredients : Ingrediant[]){
        this.slService.addIngrediantsToList(ingredients);
    }
}