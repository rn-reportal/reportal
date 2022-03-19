import axios from 'axios';

import { newsPaths } from '@/api';

export const CATEGORIES = {
  GENERAL: 'general',
  BUSINESS: 'business',
  ENTERTAINMENT: 'entertainment',
  HEALTH: 'health',
  SCIENCE: 'science',
  SPORTS: 'sports',
  TECHNOLOGY: 'technology',
};

export const LANGUAGES = {
  ENGLISH: 'en',
  CROATIAN: 'hr',
};

export const getTopHeadlines = (country, category, language, query) => {
  return axios(newsPaths.topHeadlines(country, category, language, query));
};

export const searchNews = (country, category, query) => {
  return axios(newsPaths.everything(country, category, query));
};
