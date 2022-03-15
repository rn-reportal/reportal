import { API_NEWSAPI, API_NEWSAPI_KEY } from '@env';

export const api = {
  topHeadlines: `${API_NEWSAPI}/top-headlines`,
};

export const news = {
  getTopHeadlines: (resultSize, category) =>
    `${api.topHeadlines}?pageSize=${resultSize}&category=${category}&apiKey=${API_NEWSAPI_KEY}`,
};
