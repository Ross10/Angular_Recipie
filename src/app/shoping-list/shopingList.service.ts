import { Ingrediant } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShopingListService {
    ingreidnantChange = new EventEmitter<Ingrediant []>();
    private ingrediants : Ingrediant [] = [
        new Ingrediant('apples',5),
        new Ingrediant('tomaatos',7)
      ];


      getIngrediants(){
          return this.ingrediants.slice();
      }

      addIngrediants(ingrediand : Ingrediant){
          this.ingrediants.push(ingrediand);
          this.ingreidnantChange.emit(this.ingrediants.slice());
      }

      addIngrediantsToList(ingrediants : Ingrediant[]){
          this.ingrediants.push(...ingrediants);
          this.ingreidnantChange.emit(this.ingrediants.slice());

      }
}