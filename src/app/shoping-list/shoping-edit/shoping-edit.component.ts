import { Component, OnInit, ViewChild, ElementRef,EventEmitter , Output} from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shopingList.service';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') inputNameRef : ElementRef;
  @ViewChild('amountInput') inputAmountRef : ElementRef;

  constructor(private slService : ShopingListService) { }

  ngOnInit() {
  }

  onAddIngreidants(){
    console.log(this.inputNameRef.nativeElement.value);
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngridant = new Ingrediant(ingName,ingAmount);
    this.slService.addIngrediants(newIngridant);
  }

}
