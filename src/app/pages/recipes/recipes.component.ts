import { Component, OnInit } from '@angular/core';
import {AbstractRecipesService} from "../../@core/services/recipes.service";
import {IRecipe} from "../../@core/interfaces/recipes.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(
    private recipeService: AbstractRecipesService,
    private router: Router
  ) { }

  public dataSource: IRecipe[] = [];
  ngOnInit(): void {
    this.updateDataSource();
  }

  private updateDataSource() {
    this.recipeService.getRecipes().subscribe((resp) => {
      this.dataSource = resp.recipes.map((recipe => ({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        cookingSteps: recipe.cookingSteps,
        images: recipe.images,
        ingredients: recipe.ingredients,
        reviews: recipe.reviews,
        author: recipe.author,
        _id: recipe._id,
        __v: recipe.__v,
      })));
      console.log(this.dataSource);
    })
  }

  public viewRecipe(id: string) {
    this.router.navigate([`recipes/${id}`]);
  }

}
