import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {AccountComponent} from "./user/account/account.component";
import {ViewRecipeComponent} from "./recipes/view-recipe/view-recipe.component";



const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipes/:id',
    component: ViewRecipeComponent
  },
  {
    path: 'user/account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
