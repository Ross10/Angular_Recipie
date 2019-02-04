import { Component, OnInit, ViewChild, ElementRef,EventEmitter , Output} from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') inputNameRef : ElementRef;
  @ViewChild('amountInput') inputAmountRef : ElementRef;
  @Output() ingridiantAdded = new EventEmitter<Ingrediant>() ;

  constructor() { }

  ngOnInit() {
  }

  onAddIngreidants(){
    console.log(this.inputNameRef.nativeElement.value);
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngridant = new Ingrediant(ingName,ingAmount);
    this.ingridiantAdded.emit(newIngridant);

  }

}
