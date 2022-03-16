import axios from 'axios';

import { newsPaths } from '@/api';

export const CATEGORIES = {
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  ENVIRONMENT: 'environment',
  FOOD: 'food',
  HEALTH: 'health',
  POLITICS: 'politics',
  SCIENCE: 'science',
  SPORTS: 'sports',
  TECHNOLOGY: 'technology',
  TOP: 'top',
  WORLD: 'world',
};

export const LANGUAGES = {
  ENGLISH: 'en',
  CROATIAN: 'hr',
};

export const getNews = (country, category, language) => {
  return axios(newsPaths.news(country, category, language));
};
