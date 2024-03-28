// services/newsService.js

import axios from 'axios';

const API_KEY = '07d8c112574e49f397cfa885aa39c4f7';
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
