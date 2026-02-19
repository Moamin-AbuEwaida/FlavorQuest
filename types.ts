export interface RecipeImage {
  url: string;
  width: number;
  height: number;
}

export interface Ingredient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  image: string;
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: RecipeImage;
    SMALL: RecipeImage;
    REGULAR: RecipeImage;
    LARGE?: RecipeImage;
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: Record<string, Digest>;
  totalDaily: Record<string, Digest>;
  digest: Digest[];
}

export interface RecipeHit {
  recipe: Recipe;
  _links: {
    self: {
      href: string;
      title: string;
    };
  };
}

export interface EdamamResponse {
  from: number;
  to: number;
  count: number;
  _links: {
    next?: {
      href: string;
      title: string;
    };
  };
  hits: RecipeHit[];
}

export interface SearchFilters {
  q?: string;
  cuisineType?: string;
  mealType?: string;
  dishType?: string;
  time?: string;
  health?: string;
}
