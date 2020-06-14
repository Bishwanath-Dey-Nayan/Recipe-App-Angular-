import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
  }

  onAddItem(){
    const igName = this.nameInputRef.nativeElement.value;
    const igAmount = this.amountInputRef.nativeElement.value;
    const newIngrdient = new Ingredients(igName,igAmount);
    this.slService.addIngredient(newIngrdient);
  }

}
