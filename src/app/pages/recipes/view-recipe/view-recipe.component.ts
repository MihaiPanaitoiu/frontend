import { Component, OnInit } from '@angular/core';
import {AbstractRecipesService} from "../../../@core/services/recipes.service";
import {ActivatedRoute} from "@angular/router";
import {IRecipeResponse, Recipe} from "../../../@core/interfaces/recipes.interface";

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  constructor(
    private recipesService: AbstractRecipesService,
    private route: ActivatedRoute
  ) { }

  private id: string = '';
  public dataSource: Recipe = {} as Recipe;
  public loaded: boolean = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.updateDataSource();
  }

  private updateDataSource(): void {
    console.log(this.id);
    this.recipesService.getRecipe(this.id).subscribe((response) => {
      console.log(response);
      this.dataSource = response.recipe;
      this.loaded = true;
    });
  }

}
