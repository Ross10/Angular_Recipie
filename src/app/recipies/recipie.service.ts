import { EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';

export class RecipieService {
    recipieSelected= new EventEmitter<Recipie>();
    private recipies: Recipie[] = [
        new Recipie('A Test Recipie','This is a test recipie','https://www.sugat.com/wp-content/uploads/2017/06/pastel-720x480.jpg'),
        new Recipie('Another Test Recipie','This is a tesdfdft recipie','https://www.sugat.com/wp-content/uploads/2017/06/pastel-720x480.jpg')
      ];

    getRecipies() {
        return this.recipies.slice();
    }
}