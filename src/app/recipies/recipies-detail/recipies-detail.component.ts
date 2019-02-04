import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { ShopingListService } from 'src/app/shoping-list/shopingList.service';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
  @Input() recipie: Recipie;
  constructor(private recipieService : RecipieService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    console.log(this.recipie.ingrediants);
    this.recipieService.addIngreidantsToShoppingList(this.recipie.ingrediants);
  }

}
