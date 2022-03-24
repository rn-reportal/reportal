import { NEWSDATAIO_API, NEWSDATAIO_API_KEY } from '@env';

export const api = {
  news: `${NEWSDATAIO_API}/news`,
};

export const newsPaths = {
  latest: (country, category, page, language, query) => {
    let path = `${api.news}?apikey=${NEWSDATAIO_API_KEY}`;

    if (country) {
      path = `${path}&country=${country}`;
    }

    if (category) {
      path = `${path}&category=${category}`;
    }

    if (page) {
      path = `${path}&page=${page}`;
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
