import { NEWSDATA_API, NEWSDATA_API_KEY } from '@env';

export const api = {
  news: `${NEWSDATA_API}/news`,
};

export const newsPaths = {
  news: (country, category, language) =>
    `${api.news}?category=${category}&language=${language}&apikey=${NEWSDATA_API_KEY}`,
};
