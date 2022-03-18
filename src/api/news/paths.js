import { NEWSDATA_API, NEWSDATA_API_KEY } from '@env';

export const api = {
  topHeadlines: `${NEWSDATA_API}/top-headlines`,
  search: `${NEWSDATA_API}/everything`,
};

export const newsPaths = {
  topHeadlines: (country, category, language, query) => {
    let path = `${api.topHeadlines}?apikey=${NEWSDATA_API_KEY}`;

    if (country) {
      path = `${path}&country=${country}`;
    }

    if (category) {
      path = `${path}&category=${category}`;
    }

    if (language) {
      path = `${path}&language=${language}`;
    }

    if (query) {
      path = `${path}&q=${encodeURIComponent(query)}`;
    }

    return path;
  },
  everything: (country, category, language, query) => {
    let path = `${api.search}?apikey=${NEWSDATA_API_KEY}`;

    if (country) {
      path = `${path}&country=${country}`;
    }

    if (category) {
      path = `${path}&category=${category}`;
    }

    if (language) {
      path = `${path}&language=${language}`;
    }

    if (query) {
      path = `${path}&q=${encodeURIComponent(query)}`;
    }

    return path;
  },
};