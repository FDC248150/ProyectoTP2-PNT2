//seria ideal sacar el hardcode de VUE para consumir esta API

import axios from 'axios';

const API_KEY = 'tu_api_key_tmdb';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPeliculasPopulares = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES',
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener películas populares:', error);
    throw error;
  }
};
