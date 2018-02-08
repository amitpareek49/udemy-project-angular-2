import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Milk', 5),
    new Ingredient('Bread', 9)
  ];
  
  constructor() { }

  ngOnInit() {
  }

  onAddingIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
