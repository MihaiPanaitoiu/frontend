import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PagesComponent } from './pages/pages.component';
import {PagesRoutingModule} from "./pages/pages-routing.module";
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { AccountComponent } from './pages/user/account/account.component';
import {AbstractDataApi, DataApi} from "./@core/Data-Api/data-api";
import {AbstractRecipesService, RecipesService} from "./@core/services/recipes.service";
import {HttpClientModule} from "@angular/common/http";
import { ViewRecipeComponent } from './pages/recipes/view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    RecipesComponent,
    AccountComponent,
    ViewRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [
    {provide: AbstractDataApi, useClass: DataApi},
    {provide: AbstractRecipesService, useClass: RecipesService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
