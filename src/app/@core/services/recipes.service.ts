import {AbstractDataApi} from "../Data-Api/data-api";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {IRecipe, IRecipeResponse, IRecipesResponse} from "../interfaces/recipes.interface";

export abstract class AbstractRecipesService {
  abstract getRecipes(): Observable<IRecipesResponse>;
  abstract getRecipe(id: string): Observable<IRecipeResponse>;
  abstract addRecipe(recipe: any): Observable<any>;
  abstract updateRecipe(recipe: any): Observable<any>;
  abstract deleteRecipe(id: string): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService extends AbstractRecipesService {
  constructor(private dataApi: AbstractDataApi) {
    super();
  }
  getRecipes(): Observable<IRecipesResponse> {
    console.log('sunt aici');
    return this.dataApi.get('recipes', {});
  }
  getRecipe(id: string): Observable<IRecipeResponse> {
    return this.dataApi.get(`recipes/${id}`, {});
  }
  addRecipe(recipe: any): Observable<any> {
    return this.dataApi.post('recipes', recipe);
  }
  updateRecipe(recipe: any): Observable<any> {
    return this.dataApi.put(`recipes/${recipe.id}`, recipe);
  }
  deleteRecipe(id: string): Observable<any> {
    return this.dataApi.delete(`recipes/${id}`, {});
  }
}
