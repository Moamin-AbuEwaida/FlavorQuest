import { EdamamResponse, SearchFilters } from '../types';

const APP_ID = '0ac9fe5c';
const APP_KEY = '6c0b154d0993874aa2d0de8e22a1a45f';
const APP_USER = '1409622401946';
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (filters: SearchFilters): Promise<EdamamResponse> => {
  const url = new URL(BASE_URL);
  url.searchParams.append('type', 'public');
  url.searchParams.append('app_id', APP_ID);
  url.searchParams.append('app_key', APP_KEY);

  if (filters.q) url.searchParams.append('q', filters.q);
  if (filters.cuisineType) url.searchParams.append('cuisineType', filters.cuisineType);
  if (filters.mealType) url.searchParams.append('mealType', filters.mealType);
  if (filters.dishType) url.searchParams.append('dishType', filters.dishType);
  if (filters.time) url.searchParams.append('time', filters.time);
  if (filters.health) url.searchParams.append('health', filters.health);

  // Randomize results slightly to keep it fresh if no query specific
  if (!filters.q && !filters.cuisineType && !filters.mealType) {
      url.searchParams.append('random', 'true');
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Edamam-Account-User': APP_USER
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return data as EdamamResponse;
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    throw error;
  }
};