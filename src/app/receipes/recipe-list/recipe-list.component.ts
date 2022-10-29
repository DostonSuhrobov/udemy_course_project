import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo-template-design-1f535b54c66f5d3251c99c369c1cf894_screen.jpg?ts=1622307482'),
    
    new Recipe('A Test Recipe', 'This is simply a test', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-logo-template-design-1f535b54c66f5d3251c99c369c1cf894_screen.jpg?ts=1622307482')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
