import axios from 'axios';

const API_KEY = 'YOUR_NEWSAPI_KEY'; // Replace with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (category = '') => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      apiKey: API_KEY,
      category,
    },
  });
  return response.data.articles;
};

export const searchArticles = async (query) => {
  const response = await axios.get(`${BASE_URL}/everything`, {
    params: {
      apiKey: API_KEY,
      q: query,
    },
  });
  return response.data.articles;
};


npm install jsonwebtoken bcryptjs
