import axios from 'axios';

import { newsPaths } from '@/api';

export const CATEGORIES = {
  TOP: 'top',
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  ENVIRONMENT: 'environment',
  FOOD: 'food',
  HEALTH: 'health',
  POLITICS: 'politics',
  SCIENCE: 'science',
  SPORTS: 'sports',
  TECHNOLOGY: 'technology',
  WORLD: 'world',
};

export const LANGUAGES = {
  ENGLISH: 'en',
  CROATIAN: 'hr',
};

export const getLatestNews = (country, category, page, language, query) => {
  return axios(newsPaths.latest(country, category, page, language, query));
};
