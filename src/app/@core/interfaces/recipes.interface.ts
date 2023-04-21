export interface IRecipesResponse {
  recipes: IRecipe[];
}

export interface IRecipe {
  reviews: string[];
  _id: string;
  title: string;
  description: string;
  cookingSteps: string;
  images: string[];
  ingredients: {
    _id: string;
    name: string;
    amount: string;
    unit: string;
  }[];
  author: string;
  __v: number;
  id: string;
}

interface RecipeReview {
  _id: string;
  body: string;
  rating: number;
  author: {
    _id: string;
    email: string;
    username: string;
    __v: number;
  };
  __v: number;
}

interface RecipeIngredient {
  _id: string;
  name: string;
  amount: string;
  unit: string;
}

interface RecipeAuthor {
  _id: string;
  email: string;
  username: string;
  __v: number;
}

export interface Recipe {
  reviews: RecipeReview[];
  _id: string;
  title: string;
  description: string;
  cookingSteps: string;
  ingredients: RecipeIngredient[];
  images: string[];
  author: RecipeAuthor;
  __v: number;
  id: string;
}

export interface IRecipeResponse {
  recipe: Recipe;
}

