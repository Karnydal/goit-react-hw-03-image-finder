const API_KEY = '28328300-6db152c443a389b785b4f18e6';
const BASE_URL = 'https://pixabay.com/api';

export function fetchAPI(value, page) {
  return fetch(`${BASE_URL}/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Ohhh :( Somthing went wrong. Please try one more time! `))
    }).then(r => { 
      return {
        hits: r.hits.map(({ id, largeImageURL, webformatURL, tags }) => ({
        id,
        largeImageURL,
        webformatURL,
        tags,
        })),
        totalHits: r.totalHits,
      }
    });
  
};