import { EdamamResponse, SearchFilters } from '../types';

// Access global window ENV variables defined in index.html
// This is a robust fallback for GitHub Pages where .env files might not be processed correctly in all setups
const getEnv = () => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.ENV) {
    // @ts-ignore
    return window.ENV;
  }
  // Fallback to standard import.meta.env if window.ENV is missing
  try {
     // @ts-ignore
     return import.meta.env || {};
  } catch (e) {
     return {};
  }
};

const env = getEnv();

const APP_ID = env.VITE_EDAMAM_APP_ID || '';
const APP_KEY = env.VITE_EDAMAM_APP_KEY || '';
const APP_USER = env.VITE_EDAMAM_APP_USER || '';

const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (filters: SearchFilters): Promise<EdamamResponse> => {
  if (!APP_ID || !APP_KEY) {
    console.error("Missing API Keys: Keys not found in window.ENV or .env");
    // We don't throw immediately to allow the UI to render (potentially with empty states)
  }

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
    const headers: HeadersInit = {
        'Accept': 'application/json'
    };

    // Only attach user header if the var is present
    if (APP_USER) {
        headers['Edamam-Account-User'] = APP_USER;
    }

    const response = await fetch(url.toString(), { headers });

    if (!response.ok) {
      const errorText = await response.text();
      // Handle specific 429 errors or auth errors gracefully
      if (response.status === 401 || response.status === 403) {
          throw new Error("API Authentication failed. Please check your credentials.");
      }
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const data = await response.json();
    return data as EdamamResponse;
  } catch (error) {
    console.error('Failed to fetch recipes:', error);
    throw error;
  }
};